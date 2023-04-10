class UserReviewsSerializerSerializer < ActiveModel::Serializer
  attributes :id, :comment, :trip_id, :trip
end
