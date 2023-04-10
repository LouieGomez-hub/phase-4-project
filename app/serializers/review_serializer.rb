class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :comment
  has_one :user, serializer: ReviewUserSerializer
  has_one :trip, serializer: ReviewTripSerializer
end
