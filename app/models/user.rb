class User < ApplicationRecord
    has_secure_password

    has_many :trips
    has_many :reviews
    has_many :trips, through: :reviews
end
