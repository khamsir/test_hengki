import { dummyData } from "./dummyData";

const Berita = () => {
    return (
        <div className="vw-100 vh-100">
            <div className="container py-5">
                <div className="d-flex justify-content-between align-items-center">
                    <p>Daftar Berita</p>
                    <button type="button" className="btn btn-primary">Tambah Berita</button>
                </div>
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">No</th>
                            <th scope="col">Judul</th>
                            <th scope="col">Content</th>
                            <th scope="col">Diunggah Pada</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            dummyData.map((el, idx) => (
                                <tr key={idx}>
                                    <th scope="row">{idx + 1}</th>
                                    <td>{el.judul}</td>
                                    <td>{el.content}</td>
                                    <td>{el.created_at}</td>
                                    <td className="d-flex gap-2">
                                        <button className="btn btn-info">edit</button>
                                        <button className="btn btn-danger">delete</button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Berita;