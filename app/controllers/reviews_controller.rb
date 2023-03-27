class ReviewsController < ApplicationController

    def index
        review = Review.all
        render json: review
    end

    def create
        review = Review.create(review_params)
        if review.valid?
            session[:review_id] = review.id
            render json: review, status: :created
        else
            render json: { error: "Not authorized" }, status: :unauthorized unless session.include? :review_id
        else
            render json: { error: user.errors.full_messages }, status: :unprocessable_entity
        end
    end

    def update
        review = Review.find_by(id: params[:id])
        review.update!(review_params)
        render json: review
    end

    def destroy
        review = Review.find_by(id: params[:id])
        review.destroy
        head :no_content
    end

    private

    def review_params
        params.permit(:comment, :user_id, :trip_id)
    end
end
