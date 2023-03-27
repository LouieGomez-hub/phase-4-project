class TripsController < ApplicationController

    def index
        trip = Trip.all
        render json: trip
    end

    def show
        trip = Trip.find_by(id: params[:id])
        render json: trip, status: :created
    end

    def create
        trip = Trip.create(trip_params)
        if trip.valid?
            session[:trip_id] = trip.id
            render json: trip, status: :created
        else
            render json: { error: "Not authorized" }, status: :unauthorized unless session.include? :trip_id
        else
            render json: { error: user.errors.full_messages }, status: :unprocessable_entity
        end
    end

    private

    def trip_params
        params.permit(:name, :location, :price, :rating, :description, :user_id)
    end
end
