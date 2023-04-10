class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :password_digest
  has_many :trips, serializer: UserTripSerializer
  has_many :reviews, serializer: UserReviewsSerializer
end
