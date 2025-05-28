### 💽 데이터베이스 추가개념

- **`성능 향상 기법`**
    - **Index**
        - 클러스터 인덱스는 데이터 파일과 직접 연관
        - 데이터 크기가 너무 크면 페이지 분할이 빈번하여 쓰기 성능이 저하된다.
        - 인덱스는 카디널리티가 높을수록 유리하다.
        - 클러스터 인덱스는 읽기 성능은 보조 인덱스보다 빠르지만 쓰기는 느리다.
    - **Sagable Query**
        - 쿼리 조건이 인덱스를 활용할 수 있는 형태인가를 판단
        - where, order by, group by 등에는 가능한 인덱스가 걸린 컬럼 사용
        - where 절에 함수, 연산, like 문은 사거블하지 않다.
        - between, like, 대소비교는 범위가 크면 사거블하지 않다.
        - 범위보다는 in절을 사용하는 게 좋고, in보다는 exists가 더 좋다.
        - 꼭 필요한 경우가 아니라면 서브 쿼리보다는 조인을 사용할 것
- **`백업`**
    - 데이터베이스에서도 예상하지 못한 문제가 발생할 수 있으므로 데이터베이스를 복제하여 보관하는 작업
- **`복원`**
    - 장애가 발생하여 운영 중인 데이터에 손상이 발생했을 때, 이전에 복사해 둔 백업 파일을 사용하여 데이터를 원래대로 되돌려 놓는 작업
- **`데이터베이스 시스템 운영 시 일어날 수 있는 장애`**
    - 미디어 오류
    - 사용자 오류
    - 하드웨어 장애
- **`백업의 종류`**
    - 전체 백업, 차등 백업, 증분 백업
    - 데이터베이스 트랜잭션과 백업 시점과의 관계 → 데이터가 입력되고 백업될 때, 이전 데이터까지 포함되어 누적 저장되는 구조
        
        ![Image](https://github.com/user-attachments/assets/a342e423-729a-4436-b400-60eb7deb69f9)
        

> **전체 백업**
> 
- 데이터베이스 개체, 시스템 테이블, 데이터 등 데이터베이스 전체를 백업하는 것
- 백업 시점의 데이터베이스 복사본을 만들어 두는 것으로 이해하면 된다.

> **차등 백업**
> 
- 전체 백업을 수행한 이후 변경된 데이터만 저장하는 것
- 전체 백업으로 데이터베이스의 복사본을 만든 후 그 복사본과 차이가 있는 변경 부분만 백업하는 방법

> **증분 백업**
> 
- 데이터베이스에서 수행한 작업을 기록하고 있는 트랜잭션 로그 파일을 저장하는 방법

> **백업 방법**
> 
- **`물리적 백업`**
    - 데이터베이스를 구동하기 위해 필요한 모든 파일을 물리적으로 복사하는 방법
    - 데이터베이스를 운영 중일 때 진행하는지 혹은 중지했을 때 진행하는지에 따라 콜드 백업과 핫 백업으로 나뉜다.
- **`논리적 백업`**
    - 실제 데이터베이스를 구성하는 물리적 파일을 직접 복사하는 방법이 아니라 데이터베이스에 있는 콘텐츠를 별도의 파일로 옮겨 백업하는 방법
    - 데이터를 일종의 스크립터 형태로 백업한다.

### 💦 백업 후 복원하기

- 원하는 데이터베이스 백업하기
    - **`mysqldump -u root -p scottdb > ~/Desktop/my_backup.sql`**
- 워크밴치의 import 기능을 활용하여 백업 파일/복원할 데이터베이스 선택 후 import
    
    ![Image](https://github.com/user-attachments/assets/59322584-192c-4414-a900-261e676bdc05)
    
- 복원 확인
    
    ![Image](https://github.com/user-attachments/assets/a5ab4e2d-3459-4f33-8c99-39b1f67318af)
    
- 터미널로 복원해 보기
    - 복원할 데이터베이스 생성
        - **`mysql -u root -p -e "create database scottdb_restore;"`**
    - 백업 파일로 복원하기
        - **`mysql -u root -p scottdb_restore < ~/Desktop/scottdb_backup.sql
`**
            
            ![Image](https://github.com/user-attachments/assets/1535bda7-136d-4289-9b97-ecfd9f702f96)
            
            ![Image](https://github.com/user-attachments/assets/370338bd-9f7e-4437-b38a-82ff23310348)
            

### 🙆🏻‍♀️ FullText Index

- 보통 mysql에서 텍스트 문자열을 검색할 경우 like를 이용해 원하는 텍스트를 필터링해 조회한다.
    - **`select * from FulltextTbl where description like “%남자%”;`**
    - 이는 전체 테이블을 스캔하므로 검색할 텍스트 내용이 많은 경우 성능이 떨어지게 된다.
    - 이를 전체 텍스트 검색 기능으로 해결!
- **`전체 텍스트 검색`**
    - **첫글자뿐만 아니라 중간의 단어나 문장으로도 인덱스를 생성**해 주기 때문에, 전체 텍스트 인덱스를 통해 순식간에 검색 결과를 얻을 수 있다.
    - 전체 텍스트 인덱스는 신문기사와 같이, 텍스트로 이루어진 문자열 데이터의 내용을 가지고 생성한 특수한 인덱스 종류이다. 내용이 긴 텍스트를 따로 인덱스하여 관리할 수 있다.

**👻 FullText Index**

- 전체 텍스트 검색은 긴 문자의 텍스트 데이터를 빠르게 검색하기 위한 mysql의 부가적인 기능
- 전체 텍스트 인덱스는 긴 문장 전체를 대상으로 인덱싱하며, InnoDB와 MyISAM 테이블만 지원하고 **`char, varchar, text`** 타입 문자만 인덱싱이 가능하다. (mysql 5.5 이상 버전에서는 기본적으로 InnoDB가 설정되어 있다. MyISAM 은 구버전 스토리지 엔진!)
- **`검색 과정`**
    - 문서들을 분석하여 검색 인덱스를 만든다.
        - **`Tokenizer`** : 문장을 토큰 단위로 분리 (I like cats → I, like, cats)
        - **`Stemmer`** : 단어의 어간 추출 (running, runs → run)
        - **`Stopword list`** : 너무 흔해서 인덱스에 넣지 않는 단어 제거 (a, the, is, and)
    - 전처리된 토큰들을 인덱스 구조에 저장한다. 이때 어떤 문서에 어떤 단어가 등장하는지 매핑한다.
    - 사용자가 키워드를 입력하면, 그 키워드가 저장된 인덱스에서 빠르게 찾아서 해당 단어가 있는 문서들을 반환
        - **cat index → cat이 포함된 문서 목록 반환**

![Image](https://github.com/user-attachments/assets/f298635f-2e7f-416e-8a11-10739d91dc36)

> **Fulltext Index 사용 방법**
> 
- 데이터베이스 생성 후 데이터 삽입
    
    ```sql
    use fulltext_db;
    
    create table FulltextTbl (
      id int auto_increment primary key,
      title varchar(15) not null,
      description varchar(1000)
    ) ;
    
    INSERT INTO FulltextTbl VALUES
      (NULL, '광해, 왕이 된 남자','왕위를 둘러싼 권력 다툼과 당쟁으로 혼란이 극에 달한 광해군 8년'),
      (NULL, '간첩','남한 내에 고장간첩 5만 명이 암약하고 있으며 특히 권력 핵심부에도 침투해있다.'),
      (NULL, '피에타',' 더 나쁜 남자가 온다! 잔혹한 방법으로 돈을 뜯어내는 악마같은 남자 스토리.'),
      (NULL, '레지던트 이블 5','인류 구원의 마지막 퍼즐, 이 여자가 모든 것을 끝낸다.'),
      (NULL, '파괴자들','사랑은 모든 것을 파괴한다! 한 여자를 구하기 위한, 두 남자의 잔인한 액션 본능!'),
      (NULL, '킹콩을 들다',' 역도에 목숨을 건 시골소녀들이 만드는 기적 같은 신화.'),
      (NULL, '테드','지상최대 황금찾기 프로젝트! 500년 전 사라진 황금도시를 찾아라!'),
      (NULL, '타이타닉','비극 속에 침몰한 세기의 사랑, 스크린에 되살아날 영원한 감동'),
      (NULL, '8월의 크리스마스','시한부 인생 사진사와 여자 주차 단속원과의 미묘한 사랑'),
      (NULL, '늑대와 춤을','늑대와 친해져 모닥불 아래서 함께 춤을 추는 전쟁 영웅 이야기'),
      (NULL, '국가대표','동계올림픽 유치를 위해 정식 종목인 스키점프 국가대표팀이 급조된다.'),
      (NULL, '쇼생크 탈출','그는 누명을 쓰고 쇼생크 감옥에 감금된다. 그리고 역사적인 탈출.'),
      (NULL, '인생은 아름다워','귀도는 삼촌의 호텔에서 웨이터로 일하면서 또 다시 도라를 만난다.'),
      (NULL, '사운드 오브 뮤직','수녀 지망생 마리아는 명문 트랩가의 가정교사로 들어간다'),
      (NULL, '매트릭스',' 2199년.인공 두뇌를 가진 컴퓨터가 지배하는 세계.') ;
    ```
    
- 검색 가능한 단어 숫자 확인 (기본으로 3, 3글자 이상만 전체 텍스트 검색이 가능함) → 2글자로 변경
    
    ![Image](https://github.com/user-attachments/assets/b0a34025-2621-4db8-bf3b-8ac5db39f50e)
    
    - **`sudo nano /opt/homebrew/etc/my.cnf`**
    - **`[mysqld]
    innodb_ft_min_token_size=2`** 내용 추가
        
        ![Image](https://github.com/user-attachments/assets/aa1a90d9-2c10-465f-8b63-15f0d5493ecd)
        
        ![Image](https://github.com/user-attachments/assets/2db15a3c-26e6-4be7-bdaf-74461ec80a2a)
        
    - 2로 정상적으로 변경된 것 확인
- 인덱스 생성
    - **`create fulltext index idx_description on FullTextTbl(description);`**
        
        **`show index from FullTextTbl;`**
        
        ![Image](https://github.com/user-attachments/assets/df7216d3-b558-4409-91e4-bba063e0d164)
        
- 전체 텍스트 검색
    - 쿼리의 select문의 where절에 match(), against()와 같은 특수한 메소드를 사용해야 전체 텍스트 인덱스를 활용해 검색이 된다.
        
        ![Image](https://github.com/user-attachments/assets/dd621364-be1a-4e03-8d4e-51fd72893d19)
        
- 자연어 검색
    - 특별히 옵션을 지정하지 않거나 in natural language mode를 붙이면 자연어 검색을 한다.
    - 자연어 검색은 단어가 정확한 것을 검색해준다.
        - **`select * from newspaper where match(article) against(’영화’ in natural language mode);`**
    - 영화는, 영화가 등 능동적인 검색 불가. 영화라는 단어만 검색된다. (공백으로 구분하므로 ‘영화’만 인식한다.)
- boolean 모드 검색
    - 이 문제를 해결하기 위해 Like 연산자를 사용하듯 boolean mode 검색 기능을 사용할 수 있다.
    - 뒤에 In boolean mode 옵션을 붙여주면 된다.
    - 필수인 +, 제외하기 위한 -, 부분 검색을 위한 * 연산자 등 다양한 연산자를 지원한다.
        
        ```sql
        use fulltext_db;
        
        select * from FulltextTbl;
        
        select * from FulltextTbl where match(description) against('남자*' in boolean mode);
        
        # 여자가, 여자를, 여자는 등 검색
        select * from FulltextTbl where match(description) against('여자*' in boolean mode);
        
        # 여자라는 단어가 들어있는 설명 중 인류 내용이 들어간 결과
        select * from FulltextTbl where match(description) against('여자 +인류' in boolean mode);
        
        # 여자라는 단어가 들어간 설명 중 주차 내용은 검색 결과에서 제외
        select * from FulltextTbl where match(description) against('여자 -주차' in boolean mode);
        
        # 여자 또는 남자가 있는 경우 검색
        select * from FulltextTbl where match(description) against('남자* 여자*' in boolean mode);
        ```
        
- stop word
    - 전체 텍스트 인덱스는 긴 문장에 대해서 인덱스를 생성하기 때문에 그 양이 커질 수밖에 없다.
    - 실제로 검색에서 무시할 만한 단어들은 전체 텍스트 인덱스로 생성하지 않는 편이 좋다.
    - mysql은 36개의 중지 단어를 미리 가지고 있다. (테이블로써 가지고 있는 것이 아니라 C로 하드코딩되어 있다.) **`innodb_ft_server_stopword_table`** 이 테이블에 사용자 지정 테이블을 지정하면, 지정한 중지 단어들이 들어있는 테이블이 중지 단어로 적용되어 인덱스가 생성되지 않는다. 단, sql 재시작시 초기화되므로 영구 적용을 원하면 cnf 파일에 추가하여야 한다.
    - 테이블에서 만들어진 전체 텍스트 인덱스 확인하기
        
        ![Image](https://github.com/user-attachments/assets/63c6a153-20e0-4788-9ee8-ac76136a240e)
        
    - stop word table 만들어서 중지 단어 지정하기
        
        ```sql
        set global innodb_ft_aux_table = 'fulltext_db/FulltextTbl';
        
        drop index idx_description on FulltextTbl;
        
        # 중지 단어를 위한 테이블 만들기 -> 데이터는 반드시 value, varchar
        create table user_stopword (value varchar(30));
        
        insert into user_stopword values ('특히'), ('함께'), ('모든');
        
        # 중지 단어 테이블에 지금 만든 테이블을 추가
        set global innodb_ft_server_stopword_table = 'fulltext_db/user_stopword';
        
        show global variables like 'innodb_ft_server_stopword_table';
        
        create Fulltext index idx_description on FulltextTbl(description);
        
        # 테이블에서 만들어진 전체 텍스트 인덱스 보기
        select word, doc_count, doc_id, position from information_schema.innodb_ft_index_table;
        ```
        
        - 지정해 놓은 특히, 함께, 모든과 같은 단어에 인덱스가 사라진 것을 확인할 수 있다.