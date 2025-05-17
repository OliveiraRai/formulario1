<div style="font-family: Arial, sans-serif; line-height: 1.6; max-width: 800px; margin: auto; padding: 20px;">

  <h1 style="color: #2c3e50;">📝 Formulário com Máscaras de Input</h1>
  <p>Projeto de formulário HTML com estilização em CSS e aplicação de máscaras dinâmicas em JavaScript para os campos de <strong>CEP</strong> e <strong>Telefone</strong>.</p>

  <hr>

  <h2 style="color: #2980b9;">🚀 Sobre o Projeto</h2>
  <p>Este é um simples formulário de contato contendo:</p>
  <ul>
    <li>Campos de nome, e-mail, telefone, estado, cidade, CEP, mensagem e anexo;</li>
    <li>Estilização customizada com <strong>HTML + CSS puro</strong>;</li>
    <li>Máscaras dinâmicas com <strong>JavaScript puro (Vanilla JS)</strong>.</li>
  </ul>

  <h2 style="color: #27ae60;">🔧 Funcionalidade Implementada</h2>
  <h3>✅ Máscara de CEP</h3>
  <p><strong>Formato aplicado:</strong> <code>12345-678</code></p>
  <ul>
    <li>Ao digitar, apenas números são permitidos.</li>
    <li>A máscara é automaticamente aplicada quando há mais de 5 dígitos.</li>
  </ul>

  <h3>✅ Máscara de Telefone</h3>
  <p><strong>Formato aplicado:</strong> <code>(XX) XXXXX-XXXX</code></p>
  <ul>
    <li>Limita para até 11 dígitos numéricos.</li>
    <li>Formata dinamicamente à medida que o usuário digita.</li>
    <li><strong>Solução inteligente</strong> para apagar parênteses sem travar a digitação (explicado abaixo 👇).</li>
  </ul>

  <h2 style="color: #c0392b;">❗ Dificuldade Encontrada</h2>
  <p>Durante o desenvolvimento da máscara de <strong>telefone</strong>, enfrentei um problema chato:</p>
  <blockquote style="border-left: 4px solid #ccc; padding-left: 10px; color: #555;">
    "Quando o usuário digitava o número completo, <strong>não conseguia apagar os parênteses</strong> do DDD normalmente. Eles ficavam travados no campo!"
  </blockquote>

  <h2 style="color: #8e44ad;">💡 Como Resolvi</h2>
  <p>Tive um <strong>insight</strong> simples, mas poderoso:</p>
  <ul>
    <li>Em vez de exibir o <code>)</code> logo após o segundo dígito do DDD, só o exibo <strong>após o terceiro dígito</strong> do número ser digitado.</li>
    <li>Isso faz com que o parêntese só apareça <strong>depois</strong> de parte do número já estar presente, e <strong>some normalmente</strong> ao apagar os dígitos.</li>
  </ul>
  <p>Essa pequena mudança tornou o comportamento <strong>muito mais natural e fluido</strong> para o usuário!</p>

  <h2 style="color: #f39c12;">🧠 Aprendizados</h2>
  <ul>
    <li>Como criar máscaras de input com JavaScript puro;</li>
    <li>Como tratar melhor a experiência do usuário durante a digitação;</li>
    <li>A importância de entender o comportamento dos eventos <code>input</code> para evitar travamentos.</li>
  </ul>

  <h2 style="color: #34495e;">📂 Arquivos</h2>
  <ul>
    <li><code>index.html</code> – Estrutura do formulário e Estilização</li>
    <li><code>scripts.js</code> – Lógica das máscaras</li>
  </ul>

  <h2 style="color: #16a085;">👨‍💻 Autor</h2>
  <p>Desenvolvido com dedicação por <strong>Rai Oliveira</strong> 🚀<br>
  Se quiser trocar uma ideia ou me dar um feedback, sinta-se à vontade para me chamar!</p>

</div>
