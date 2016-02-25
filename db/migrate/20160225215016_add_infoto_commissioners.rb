class AddInfotoCommissioners < ActiveRecord::Migration
  def change
  	add_column :commissioners, :district_id, :integer
  	add_column :commissioners, :name, :text
  	add_column :commissioners, :url, :string
  	add_column :commissioners, :phone, :integer
  	add_column :commissioners, :email, :string
  end
end
