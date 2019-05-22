class ProductsController < ApplicationController

	def index
		@product = Product.new
		@picture = @product.pictures.build
	  if current_user.admin
		 @products = Product.all
		else
		 @products = Product.available
		end
	end 

	def new
		@product = Product.new
		@picture = @product.pictures.build
	end 

	def create
		@product = Product.new(product_params)
		respond_to do |format|
      @product.save
      if params[:pictures].present?
      	params[:pictures]['avatars'].each do |a|
					@product_pictures = @product.pictures.create!(avatar: a)
				end
      end
      format.js
    end
	end
	
	def edit
		@product = common
	end

	def update 
		@product = common
		respond_to do |format|
		@product.update_attributes(product_params)
		if @product.pictures.present?
		   @product.pictures.delete_all
		end
			params[:pictures]['avatars'].each do |a|
			@product_pictures = @product.pictures.create!(avatar: a)
	  end
      format.js
    end
	end

	def show
		@product = common
	end

	def destroy
    @product = common
    @product.destroy
    respond_to do |format|
      format.js   
    end
  end

  def common
  	Product.find(params[:id])
  end

	private
	def product_params
		params.require(:product).permit(:name,:details,:price,:available,pictures_attributes:[:avatars])
	end
 end