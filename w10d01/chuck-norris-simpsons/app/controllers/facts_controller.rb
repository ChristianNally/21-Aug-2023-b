class FactsController < ApplicationController
  def index
    character_id = params[:character_id] # req.params.character_id

    @character = Character.find(character_id)

    @facts = @character.facts

    render json: {
      character: @character,
      facts: @facts
    }
  end
end
