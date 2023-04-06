class TripSerializer < ActiveModel::Serializer
  attributes :id, :name, :location, :price, :rating, :description, :image_url
  has_one :user
  has_many :reviews
end
