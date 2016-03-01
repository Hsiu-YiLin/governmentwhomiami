class AddMoreDateToCommissioners < ActiveRecord::Migration
  def change
  	add_column :commissioners, :facebook, :text
  	add_column :commissioners, :twitter, :text
  end
end
