class Review < ApplicationRecord
    validates :comment, length: { maximum: 250 }

    belongs_to :user
    belongs_to :trip
end
