import React from 'react'
import { Link } from 'react-router-dom'

const Pagination = props => {
    console.log(props.link)
    return ( 
        <nav aria-label="Page navigation example" style={{width: '100%'}}>
            <ul className="pagination justify-content-center">
                <li className="page-item">
                    {
                        (parseInt(props.currentPage) - 1 === 0) ?
                            null
                        :
                            <Link className="page-link" to={`/admin/${props.link}/page/${parseInt(props.currentPage) - 1}`} aria-label="Previous" onClick={() => props.handlePage(parseInt(props.currentPage) - 1)}>
                            <span aria-hidden="true">&laquo;</span>
                        </Link>
                    }
                </li>
                {
                    props.pages.map(page => (
                        <li key={page} className={(page === parseInt(props.currentPage) ? "page-item active" : "page-item")} onClick={() => props.handlePage(page) }>
                            <Link className="page-link" to={`/admin/${props.link}/page/${page}`}>{page}</Link>
                        </li>
                    ))
                }
                <li className="page-item">
                    {
                        (parseInt(props.currentPage) === props.pages[props.pages.length-1]) ?
                            null
                            :
                            <Link className="page-link" to={`/admin/${props.link}/page/${parseInt(props.currentPage) + 1}`} aria-label="Next" onClick={() => props.handlePage(parseInt(props.currentPage) + 1)}>
                                <span aria-hidden="true">&raquo;</span>
                        </Link>
                    }
                </li>
            </ul>
        </nav>
     );
}
 
export default Pagination;