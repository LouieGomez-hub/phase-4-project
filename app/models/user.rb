class User < ApplicationRecord
    has_secure_password
    validates :username, presence: true, uniqueness: true
    validates :password, confirmation: true

    has_many :trips
    has_many :reviews
    has_many :trips, through: :reviews
end
