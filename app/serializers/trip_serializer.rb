class TripSerializer < ActiveModel::Serializer
  attributes :id, :name, :location, :price, :rating, :description
end
