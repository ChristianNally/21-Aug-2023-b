class CreateFacts < ActiveRecord::Migration[6.1]
  def change
    create_table :facts do |t|
      t.string :location
      t.string :fact

      t.references :character, index: true, foreign_key: true

      t.timestamps
    end
  end
end
