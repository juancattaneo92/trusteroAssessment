class Task < ApplicationRecord
  validates :title, :description, :list_id, presence: true

  belongs_to :lists,
  foreign_key: :list_id,
  class_name: :List
end
