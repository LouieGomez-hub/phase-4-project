class User < ApplicationRecord
    has_secure_password
    validates :username, presence: true, uniqueness: true
    validates :password, confirmation: true

    has_many :trips, dependent: :destroy
    has_many :reviews, dependent: :destroy
    has_many :trips, through: :reviews
end
