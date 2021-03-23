class UpdateTasks < ActiveRecord::Migration[5.2]
  def change
    rename_column :tasks, :list_idx, :list_id
  end
end
