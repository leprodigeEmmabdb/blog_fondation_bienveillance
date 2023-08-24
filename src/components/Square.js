const Square = (props) => {
    var content = props.content
    var url = props.url
    var style =props.style
    var id = props.id
    return (

        <div className={style} data-aos="fade-up" data-aos-delay="100"
            id={id}>
            <img className="img-fluide rounded"
                width={300}
                height={350}
                src={url}
                alt="avatar"/>
                <p className="py-3 text-secondary">{content}</p>
        </div>
    );
}

export default Square;
