class CreateCommissioners < ActiveRecord::Migration
  def change
    create_table :commissioners do |t|

      t.timestamps null: false
    end
  end
end
