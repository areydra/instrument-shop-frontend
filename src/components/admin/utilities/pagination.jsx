import React from 'react'

const Pagination = () => {
    return ( 
        <nav aria-label="Page navigation example" style={{width: '100%'}}>
            <ul className="pagination justify-content-center">
                <li className="page-item">
                    <a className="page-link" href="/admin" aria-label="Previous">
                        <span aria-hidden="true">&laquo;</span>
                    </a>
                </li>
                <li className="page-item"><a className="page-link" href="/admin">1</a></li>
                <li className="page-item"><a className="page-link" href="/admin">2</a></li>
                <li className="page-item"><a className="page-link" href="/admin">3</a></li>
                <li className="page-item">
                    <a className="page-link" href="/admin" aria-label="Next">
                        <span aria-hidden="true">&raquo;</span>
                    </a>
                </li>
            </ul>
        </nav>
     );
}
 
export default Pagination;