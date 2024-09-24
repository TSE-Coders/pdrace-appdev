class User < ApplicationRecord
    validates :name, presence: true
    validates :last_name, presence: true

    belongs_to :pod
    has_and_belongs_to_many :events

    def self.randomUser

        max = User.all.length
        id = rand(1..max)
        id

    end



end
