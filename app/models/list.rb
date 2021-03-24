class List < ApplicationRecord
  validates :name, presence: true

  has_many :task,
  foreign_key: :task_id,
  class_name: :Task
end
