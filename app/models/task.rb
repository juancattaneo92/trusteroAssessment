class Task < ApplicationRecord
  validates :title, :description, :list_id, presence: true

  belongs_to :list,
  foreign_key: :list_id,
  class_name: :List
end
