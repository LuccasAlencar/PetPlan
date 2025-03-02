package com.petshop.petshop.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.petshop.petshop.model.Usuario;
import com.petshop.petshop.repository.UsuarioRepository;

@Service
public class UsuarioService {

    @Autowired
    private UsuarioRepository usuarioRepository;

    public Usuario cadastrarUsuario(String nome, String email, String senha) {
        if (usuarioRepository.existsByEmail(email)) {
            System.out.println("Email já cadastrado.");
            return null;
        }
        if (senha == null || senha.length() < 6) {
            System.out.println("A senha precisa ter pelo menos 6 caracteres.");
            return null;
        }
        Usuario usuario = new Usuario();
        usuario.setNome(nome);
        usuario.setEmail(email);
        usuario.setSenha(senha);
        return usuarioRepository.save(usuario);
    }

    public Usuario loginUsuario(String email, String senha) {
        if (email == null || email.isEmpty() || senha == null || senha.isEmpty()) {
            System.out.println("Email e senha são obrigatórios.");
            return null;
        }
        Usuario usuario = usuarioRepository.findByEmailAndSenha(email, senha);
        if (usuario != null) {
            System.out.println("Usuário logado: " + usuario.getEmail());
        }
        return usuario;
    }

    public boolean editarSenhaUsuario(Integer id, String novaSenha) {
        if (novaSenha == null || novaSenha.length() < 6) {
            System.out.println("A senha precisa ter pelo menos 6 caracteres.");
            return false;
        }
        Usuario usuario = usuarioRepository.findById(id).orElse(null);
        if (usuario == null) {
            System.out.println("Usuário não encontrado.");
            return false;
        }
        usuario.setSenha(novaSenha);
        usuarioRepository.save(usuario);
        return true;
    }

    public boolean excluirUsuario(Integer id) {
        if (!usuarioRepository.existsById(id)) {
            System.out.println("Usuário não encontrado.");
            return false;
        }
        usuarioRepository.deleteById(id);
        return true;
    }
}