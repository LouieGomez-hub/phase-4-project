class TripSerializer < ActiveModel::Serializer
  attributes :id, :name, :location, :price, :rating, :description, :image_url, :user_id
  has_one :user
  has_many :reviews
end
