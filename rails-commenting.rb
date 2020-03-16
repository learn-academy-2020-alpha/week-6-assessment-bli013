# ASSESSMENT 6: Rails Commenting Challenge
# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags


# app/controller/blog_posts_controller.rb

# 1)this is the controller for the BlogPost
class BlogPostsController < ApplicationController
  def index
    # 2)this shows all the data from BlogPost 
    @posts = BlogPost.all
  end

  def show
    # 3)This shows a single BlogPost and the param is the id
    @post = BlogPost.find(params[:id])
  end

  # 4) this is needed to be used to create a new post, but doesnt need anything in it.
  def new
  end

  def create
    # 5)this creates a blogpost with strong params
    @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to @post
    else
      render action: :new
    end
  end

  def delete
    @post = BlogPost.find(params[:id])
    if @post.destroy
      redirect_to blog_posts_path
    else
      # 6)reloads the page with no action
      redirect_to blog_post_path(@post)
    end
  end

  # 7)this makes section private and not public
  private
  def blog_post_params
    # 8)strong params for the blog post
    params.require(:blog_post).permit(:title, :content)
  end

end


# app/models/blog_post.rb

# 9)this is the model called BlogPost
class BlogPost < ApplicationRecord
  # 10)this links and relates
  has_many :comments
end
