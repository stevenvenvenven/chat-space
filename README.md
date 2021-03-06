## DB設計

## usersテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|null: false, index :true, :name, unique: true|
|email|text|null: false, add_index :users, :email, unique: true|
|password|text|null: false|

### Association
- has_many :groups, through: :group_members
- has_many :messages
- has_many :group_members


## groupsテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|null: false|


### Association
- has_many :users, through: :group_members
- has_many :messages
- has_many :group_members

## group_usersテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|references|null: false, foreign_key: true|
|group_id|references|null: false, foreign_key: true|

### Association
- belongs_to :user
- belongs_to :group

## messagesテーブル

|Column|Type|Options|
|------|----|-------|
|body|text||
|image|string||
|group_id|references|null: false, foreign_key: true|
|user_id|references|null: false, foreign_key: true|

### Association
- belongs_to :user
- belongs_to :group


### usersテーブル

|Column|Type|Options|
|------|----|-------|
|name|string||
|image|string||
|mail|text|uniquness: true|

### goodsテーブル

|Column|Type|Options|
|------|----|-------|
|name|string||
|image|string||
|price|integer||
|brand|text||
|size||||

### categoryテーブル
|Column|Type|Options|
|------|----|-------|


### sub_categoryテーブル
|Column|Type|Options|
|------|----|-------|


### goods_categoryテーブル
|Column|Type|Options|
|------|----|-------|
|name|string||
|image|string||
|price|integer||

