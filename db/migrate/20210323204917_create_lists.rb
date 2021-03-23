class CreateLists < ActiveRecord::Migration[5.2]
  def change
    create_table :lists do |t|
      t.integer :task_id, null: false
      t.timestamps
    end
    add_index :lists, :task_id
  end
end
