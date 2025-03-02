package com.petshop.petshop.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.petshop.petshop.model.Usuario;
import com.petshop.petshop.service.UsuarioService;


@RestController
@RequestMapping("/usuario")
public class UsuarioController {

    @Autowired
    private UsuarioService usuarioService;

    // Endpoint para teste: responde a GET na raiz /usuario
    @GetMapping
    public ResponseEntity<String> index() {
        return ResponseEntity.ok("Aplicação funcionando!");
    }

    // Endpoint para cadastro (POST)
    @PostMapping
    public ResponseEntity<?> cadastrarUsuario(@RequestBody Usuario usuario) {
        Usuario novoUsuario = usuarioService.cadastrarUsuario(
            usuario.getNome(), 
            usuario.getEmail(), 
            usuario.getSenha()
        );
        if (novoUsuario != null) {
            return ResponseEntity.ok(novoUsuario);
        }
        return ResponseEntity.badRequest().body("Erro ao cadastrar o usuário.");
    }

    // Endpoint para login (POST)
    @PostMapping("/login")
    public ResponseEntity<?> loginUsuario(@RequestBody Usuario usuario) {
        Usuario usuarioLogado = usuarioService.loginUsuario(
            usuario.getEmail(), 
            usuario.getSenha()
        );
        if (usuarioLogado != null) {
            return ResponseEntity.ok(usuarioLogado);
        }
        return ResponseEntity.status(401).body("Erro ao realizar login.");
    }

    // Endpoint para editar senha (PUT)
    @PutMapping("/editar-senha/{id}")
    public ResponseEntity<?> editarSenhaUsuario(
            @PathVariable Integer id, 
            @RequestParam("novaSenha") String novaSenha) {
        boolean resultado = usuarioService.editarSenhaUsuario(id, novaSenha);
        if (resultado) {
            return ResponseEntity.ok("Senha alterada com sucesso.");
        }
        return ResponseEntity.badRequest().body("Erro ao alterar a senha.");
    }

    // Endpoint para excluir usuário (DELETE)
    @DeleteMapping("/excluir/{id}")
    public ResponseEntity<?> excluirUsuario(@PathVariable Integer id) {
        boolean resultado = usuarioService.excluirUsuario(id);
        if (resultado) {
            return ResponseEntity.ok("Usuário excluído com sucesso.");
        }
        return ResponseEntity.badRequest().body("Erro ao excluir o usuário.");
    }
}
