class ChangePhoneTypeInCommissioner < ActiveRecord::Migration
  def change
  		change_column(:commissioners, :phone, :string)

  end
end
