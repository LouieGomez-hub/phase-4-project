class TripSerializer < ActiveModel::Serializer
  attributes :id, :name, :location, :price, :rating, :description
  has_one :user
  has_many :reviews
end
