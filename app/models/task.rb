class Task < ApplicationRecord
  validates :title, :description, :status, :list_id, presence: true

  belongs_to :lists,
  foreign_key: :list_id,
  class_name: :List
end
