class Comment < ApplicationRecord
  validates :body, :task_id, presence: true

  belongs_to :task,
  foreign_key: :task_id,
  class_name: :Task
end
