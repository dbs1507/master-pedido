import 'package:app/main.dart';

import 'package:app/view/produto/editar_produto_page.dart';
import 'package:app/view/produto/inserir_produto_page.dart';
import 'package:app/view/produto/listar_produto_page.dart';

import '../view/cliente/editar_cliente_page.dart';
import '../view/cliente/inserir_cliente_page.dart';
import '../view/cliente/listar_cliente_page.dart';

import '../view/pedido/inserir_pedido_page.dart';
import '../view/pedido/listar_pedido_page.dart';

class Routes {
  static const String home = MyHomePage.routeName;
  static const String listCliente = ListarClientePage.routeName;
  static const String insertCliente = InserirClientePage.routeName;
  static const String editCliente = EditarClientePage.routeName;

  static const String listProduto = ListarProdutoPage.routeName;
  static const String insertProduto = InserirProdutoPage.routeName;
  static const String editProduto = EditarProdutoPage.routeName;

  static const String listPedido = ListarPedidoPage.routeName;
  static const String insertPedido = InserirPedidoPage.routeName;
}
