class CreateComments < ActiveRecord::Migration[5.2]
  def change
    create_table :comments do |t|
      t.integer :task_id, null: false
      t.timestamps
    end
    add_index :comments, :task_id
  end
end
