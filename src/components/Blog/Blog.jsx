import PropTypes from 'prop-types';

const Blog = ({ blog }) => {
   const {cover, title, author, author_image, reading_time, posted_date, hashtags} = blog
    return (
        <div className='my-4'>
            <img src={cover} alt="" />
           <div className='flex items-center gap-4 my-4 justify-between'>
           <div className='flex items-center gap-4 '>
           <img className='w-16' src={author_image} alt="" />
            <div>
            <h1 className='font-bold text-2xl'>Title: { title}</h1>
            <h1>Name: {author}</h1>
            <h1>Post: {posted_date}</h1>
            </div>
           </div>
            <div className='flex gap-2'>
                <span>{reading_time} min read</span>
                <button>logo</button>
            </div>
           </div>
           <div>
           {
            hashtags.map((hash, idx) => <span key={idx}> <a href="" >{hash} </a> </span>)
           }
           </div>
        </div>
    );
};

Blog.propTypes ={
    blog: PropTypes.object.isRequired
}

export default Blog;