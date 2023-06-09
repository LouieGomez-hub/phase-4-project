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
        end
    end

    def reviews
        reviews = Trip.find_by(id: params[:id]).reviews
        render json: reviews
    end

    private

    def trip_params
        params.permit(:name, :location, :price, :rating, :description, :user_id, :image_url)
    end
end
