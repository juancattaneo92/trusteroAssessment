class UpdateTasktables < ActiveRecord::Migration[5.2]
  def change
    remove_column :lists, :task_id
    add_column :lists, :name, :string
    add_column :tasks, :list_idx, :integer
    
  end
end
