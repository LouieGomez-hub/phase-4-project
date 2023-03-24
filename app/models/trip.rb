class Trip < ApplicationRecord
    validates :price, numericality: { greater_than_or_equal_to: 100, message: "must be at least 100" }
    validates :description, length: { in: 50..200 }
    validates :location, presence: true

    belongs_to :user
    has_many :reviews
    has_many :users, through: :reviews
end
