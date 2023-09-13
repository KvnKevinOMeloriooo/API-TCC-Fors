import con from "./connection.js"


export async function inserirCliente(cliente) {
  let comando = `
      insert into tb_cliente (nm_nome, ds_usuario, ds_cpf, nr_ano, ds_placa) 
                      values (?, ?, ?, ?, ?)
  `

  let [resp] = await con.query(comando,
    [
      cliente.nome,
      cliente.modelo,
      cliente.marca,
      cliente.ano,
      cliente.placa
    ])
  
    cliente.id = resp.insertId;
  return cliente;
}
