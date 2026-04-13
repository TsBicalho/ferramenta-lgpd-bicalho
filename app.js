const questions = [
    // Dimensão 1: Preparação e Governança
    {
        dimension: "Preparação e Governança",
        id: "d1",
        question: "Qual o grau de envolvimento da alta direção na adequação à LGPD?",
        options: [
            { text: "Nenhum. A LGPD ainda não foi pautada na empresa.", score: 0 },
            { text: "Existe conscientização superficial, mas sem projetos iniciados.", score: 3.3 },
            { text: "Temos um comitê de privacidade ou projeto de adequação em andamento.", score: 6.6 },
            { text: "Cultura consolidada. A alta direção patrocina e acompanha ativamente os indicadores de privacidade.", score: 10 }
        ]
    },
    {
        dimension: "Preparação e Governança",
        id: "d1",
        question: "A empresa possui um orçamento anual e responsáveis diretos pela manutenção da privacidade?",
        options: [
            { text: "Não há orçamento nem responsáveis definidos.", score: 0 },
            { text: "Responsabilidades informais (TI ou Jurídico faz quando pode), sem orçamento.", score: 3.3 },
            { text: "Existem responsáveis nomeados, mas o orçamento é aprovado sob demanda.", score: 6.6 },
            { text: "Orçamento predefinido e equipe/responsável com atribuições exclusivas ou prioritárias definidas.", score: 10 }
        ]
    },
    
    // Dimensão 2: Mapeamento de Dados
    {
        dimension: "Mapeamento de Dados",
        id: "d2",
        question: "A empresa sabe exatamente quais dados pessoais coleta, por onde entram e onde são armazenados?",
        options: [
            { text: "Não. Não temos controle sobre quais dados são coletados.", score: 0 },
            { text: "Apenas dos sistemas principais, mas planilhas e e-mails estão fora do controle.", score: 3.3 },
            { text: "Temos a maioria dos processos mapeados em planilhas.", score: 6.6 },
            { text: "Mapeamento completo (Data Mapping / RoPA) atualizado e gerido de forma centralizada.", score: 10 }
        ]
    },
    {
        dimension: "Mapeamento de Dados",
        id: "d2",
        question: "Existe controle sobre o ciclo de vida dos dados e prazo de retenção (quando os dados devem ser eliminados)?",
        options: [
            { text: "Guardamos tudo indefinidamente.", score: 0 },
            { text: "Excluímos apenas quando um cliente solicita.", score: 3.3 },
            { text: "Temos regras de tabela de temporalidade, mas a exclusão ainda é manual.", score: 6.6 },
            { text: "Política de retenção documentada e rotinas automatizadas de descarte seguro.", score: 10 }
        ]
    },
    
    // Dimensão 3: Bases Legais
    {
        dimension: "Bases Legais e Conformidade",
        id: "d3",
        question: "Para cada dado pessoal tratado, a empresa definiu uma justificativa legal, como Contrato ou Consentimento?",
        options: [
            { text: "Desconhecemos o conceito de Bases Legais.", score: 0 },
            { text: "Aplicamos contratos apenas, sem avaliar outros usos como o envio de marketing.", score: 3.3 },
            { text: "Definimos bases legais para a maioria das áreas (RH, Comercial, Operação).", score: 6.6 },
            { text: "100% dos tratamentos possuem base legal justificada e documentada no inventário.", score: 10 }
        ]
    },
    {
        dimension: "Bases Legais e Conformidade",
        id: "d3",
        question: "Quando utilizado o Consentimento, como ele é coletado e gerenciado?",
        options: [
            { text: "Não usamos consentimento ou presumimos que o cliente aceitou.", score: 0 },
            { text: "Coletado em contratos amplos, com caixas pré-marcadas ou no meio de longos textos.", score: 3.3 },
            { text: "Consentimento específico, porém o cliente tem dificuldade para revogar depois.", score: 6.6 },
            { text: "Livre, inequívoco, e granular. O cliente possui um painel simples para aceitar ou revogar.", score: 10 }
        ]
    },

    // Dimensão 4: Direitos dos Titulares
    {
        dimension: "Direitos dos Titulares",
        id: "d4",
        question: "A empresa disponibiliza um canal de atendimento específico para os titulares (clientes e funcionários)?",
        options: [
            { text: "Não. Eles precisam ligar no SAC comum sem protocolo de dados.", score: 0 },
            { text: "Existe um e-mail genérico, mas demora a ser respondido.", score: 3.3 },
            { text: "E-mail ou formulário exclusivo com prazos de atendimento definidos.", score: 6.6 },
            { text: "Portal de Privacidade automatizado e fluxo claro para cada tipo de solicitação.", score: 10 }
        ]
    },
    {
        dimension: "Direitos dos Titulares",
        id: "d4",
        question: "Se um cliente pedir para baixar ou excluir todos os seus dados hoje, a empresa consegue atender no prazo legal (máx. 15 dias)?",
        options: [
            { text: "Impossível, não sabemos onde estão os dados de um indivíduo específico.", score: 0 },
            { text: "Muito difícil, exigiria que o time de TI vasculhasse os bancos manualmente.", score: 3.3 },
            { text: "Conseguimos em algumas áreas, mas sistemas legados tornam o processo lento.", score: 6.6 },
            { text: "Totalmente rápido por meio de buscar consolidadas ou sistemas integrados.", score: 10 }
        ]
    },

    // Dimensão 5: Encarregado de Dados (DPO)
    {
        dimension: "Encarregado de Dados (DPO)",
        id: "d5",
        question: "A empresa nomeou formalmente o Encarregado pelo Tratamento de Dados Pessoais (DPO)?",
        options: [
            { text: "Não possuímos Encarregado de Dados e nem cogitamos nomear.", score: 0 },
            { text: "Alguém do TI ou Jurídico faz o papel informalmente sem nomeação oficial.", score: 3.3 },
            { text: "DPO nomeado, porém sem recursos, autonomia ou em conflito de interesses.", score: 6.6 },
            { text: "DPO formalizado (interno ou serviço terceirizado), com total autonomia técnica.", score: 10 }
        ]
    },
    {
        dimension: "Encarregado de Dados (DPO)",
        id: "d5",
        question: "A identidade e os meios de contato do DPO estão públicos, de forma clara e objetiva para os clientes?",
        options: [
            { text: "Não há publicação de contato.", score: 0 },
            { text: "Apenas em documentos sigilosos ou internos.", score: 3.3 },
            { text: "Divulgado na Política de Privacidade, mas difícil de encontrar na página.", score: 6.6 },
            { text: "Contato em destaque no site, Política de Privacidade e materiais institucionais acessíveis.", score: 10 }
        ]
    },

    // Dimensão 6: Segurança da Informação
    {
        dimension: "Segurança da Informação",
        id: "d6",
        question: "Quais são as medidas de controle de acesso lógico existentes na empresa?",
        options: [
            { text: "Senhas compartilhadas e acessos ilimitados para qualquer funcionário.", score: 0 },
            { text: "Senhas individuais, mas quando um funcionário sai, demora para inativar acessos.", score: 3.3 },
            { text: "Login individual com restrição de tela, e Política de Senhas em vigor.", score: 6.6 },
            { text: "Perfis de permissão estritos (menor privilégio), autenticação em dois fatores (2FA) e logs de auditoria.", score: 10 }
        ]
    },
    {
        dimension: "Segurança da Informação",
        id: "d6",
        question: "Há procedimentos técnicos de proteção, como backups, antivírus corporativo e criptografia de bancos de dados?",
        options: [
            { text: "Nenhuma medida de segurança além das básicas do provedor.", score: 0 },
            { text: "Temos antivírus básico, firewalls desatualizados e backups em HD externo.", score: 3.3 },
            { text: "Antivírus gerenciado, firewall robusto e backup regular na nuvem.", score: 6.6 },
            { text: "Criptografia de disco/banco, testes de vulnerabilidade periódicos e backup espelhado.", score: 10 }
        ]
    },
    {
        dimension: "Segurança da Informação",
        id: "d6",
        question: "A empresa ministra treinamentos contínuos de proteção de dados e phishing para os colaboradores?",
        options: [
            { text: "Nunca foi realizado.", score: 0 },
            { text: "Apenas uma palestra inicial ou assinatura de termo.", score: 3.3 },
            { text: "Treinamentos semestrais gerais sobre LGPD.", score: 6.6 },
            { text: "Treinamento especializado constante e campanhas de simulação de phishing e cultura de segurança.", score: 10 }
        ]
    },

    // Dimensão 7: Gestão de Incidentes
    {
        dimension: "Gestão de Incidentes",
        id: "d7",
        question: "O que a empresa faria hoje caso descobrisse que toda a base de clientes vazou na internet?",
        options: [
            { text: "Não saberíamos por onde começar nem a quem avisar.", score: 0 },
            { text: "Chamaríamos o TI e tentaríamos descobrir como esconder ou resolver informalmente.", score: 3.3 },
            { text: "Acionaríamos advogados e tentaríamos descobrir a causa, mas seria confuso.", score: 6.6 },
            { text: "Acionaríamos o plano de resposta a incidentes já estruturado, com comitê de crise designado.", score: 10 }
        ]
    },
    {
        dimension: "Gestão de Incidentes",
        id: "d7",
        question: "Existe procedimento estabelecido para informar a ANPD e os Titulares (clientes) no prazo legal de incidentes de risco?",
        options: [
            { text: "Não sabíamos que seria necessário avisar a ninguém.", score: 0 },
            { text: "Conhecemos a obrigação legal, mas não há um passo-a-passo.", score: 3.3 },
            { text: "Existem os contatos na ANPD mapeados, elaborados por equipe jurídica.", score: 6.6 },
            { text: "Fluxograma completo de avaliação de risco definido para notificação à ANPD nas 48h.", score: 10 }
        ]
    }
];

// Estado da aplicação
let currentStep = 0;
let answers = [];
let radarChartInstance = null;

// Referências DOM
const screens = {
    welcome: document.getElementById('screen-welcome'),
    quiz: document.getElementById('screen-quiz'),
    calculating: document.getElementById('screen-calculating'),
    results: document.getElementById('screen-results')
};

const ui = {
    btnStart: document.getElementById('btn-start'),
    btnPrev: document.getElementById('btn-prev'),
    progressContainer: document.getElementById('progress-container'),
    progressFill: document.getElementById('progress-fill'),
    progressText: document.getElementById('progress-percentage'),
    questionText: document.getElementById('question-text'),
    dimensionBadge: document.getElementById('dimension-badge'),
    questionCounter: document.getElementById('question-counter'),
    optionsContainer: document.getElementById('options-container'),
    
    // Resultados e Leads
    scoreCircle: document.getElementById('score-circle'),
    finalScore: document.getElementById('final-score'),
    maturityLevel: document.getElementById('maturity-level-text'),
    maturityDesc: document.getElementById('maturity-description'),
    radarCanvas: document.getElementById('radarChart'),
    
    // Forms
    formLead: document.getElementById('lead-form'),
    btnDirectWhatsapp: document.getElementById('btn-direct-whatsapp')
};

// Funções de Navegação de Telas
function showScreen(screenKey) {
    Object.values(screens).forEach(screen => {
        screen.classList.remove('active');
        screen.classList.add('hidden');
    });
    
    screens[screenKey].classList.remove('hidden');
    screens[screenKey].classList.add('active');
    
    if (screenKey === 'quiz') {
        ui.progressContainer.classList.remove('hidden');
    } else if (screenKey === 'welcome') {
        ui.progressContainer.classList.add('hidden');
    }
}

function updateProgress() {
    const percent = Math.round(((currentStep) / questions.length) * 100);
    ui.progressFill.style.width = `${percent}%`;
    ui.progressText.innerText = `${percent}%`;
    ui.questionCounter.innerText = `${currentStep + 1}/${questions.length}`;
}

// Iniciar Quiz
ui.btnStart.addEventListener('click', () => {
    currentStep = 0;
    answers = new Array(questions.length).fill(null);
    loadQuestion();
    showScreen('quiz');
});

// Botão Anterior
ui.btnPrev.addEventListener('click', () => {
    if (currentStep > 0) {
        currentStep--;
        loadQuestion();
    }
});

// Carregar Pergunta
function loadQuestion() {
    const q = questions[currentStep];
    
    ui.dimensionBadge.innerText = q.dimension;
    ui.questionText.innerText = q.question;
    
    ui.optionsContainer.innerHTML = '';
    
    q.options.forEach((opt, index) => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        if (answers[currentStep] === index) {
            btn.classList.add('selected');
        }
        
        btn.innerHTML = `<span>${opt.text}</span>`;
        
        btn.addEventListener('click', () => {
            selectOption(index);
        });
        
        ui.optionsContainer.appendChild(btn);
    });
    
    ui.btnPrev.disabled = currentStep === 0;
    updateProgress();
}

function selectOption(index) {
    // Visual feedback
    const btns = ui.optionsContainer.querySelectorAll('.option-btn');
    btns.forEach(b => b.classList.remove('selected'));
    btns[index].classList.add('selected');
    
    answers[currentStep] = index;
    
    // Auto avançar após pequeno delay para o destaque visual
    setTimeout(() => {
        if (currentStep < questions.length - 1) {
            currentStep++;
            loadQuestion();
        } else {
            finishQuiz();
        }
    }, 400); // 400ms delay 
}

// Finalizar Quiz
function finishQuiz() {
    ui.progressFill.style.width = `100%`;
    ui.progressText.innerText = `100%`;
    showScreen('calculating');
    
    setTimeout(() => {
        calculateResults();
        showScreen('results');
    }, 2500); // Fake loader para gerar expectativa profissional
}

// Cálculo e Resultados
const dimensionKeys = [
    "Preparação e Governança",
    "Mapeamento de Dados",
    "Bases Legais e Conformidade",
    "Direitos dos Titulares",
    "Encarregado de Dados (DPO)",
    "Segurança da Informação",
    "Gestão de Incidentes"
];

let finalResults = {};
let totalPercentage = 0;

function calculateResults() {
    let dimensionScores = {};
    let dimensionCounts = {};
    
    // Init
    dimensionKeys.forEach(k => {
        dimensionScores[k] = 0;
        dimensionCounts[k] = 0;
    });
    
    // Sum
    answers.forEach((ansIndex, qIndex) => {
        const q = questions[qIndex];
        const point = q.options[ansIndex].score;
        dimensionScores[q.dimension] += point;
        dimensionCounts[q.dimension] += 1;
    });
    
    // Avg per dimension
    let radarData = [];
    let sumTotal = 0;
    
    dimensionKeys.forEach(k => {
        const dScore = (dimensionScores[k] / dimensionCounts[k]) * 10; // converte de /10 p/ /100
        finalResults[k] = Math.round(dScore);
        radarData.push(finalResults[k]);
        sumTotal += finalResults[k];
    });
    
    totalPercentage = Math.round(sumTotal / dimensionKeys.length);
    renderResults(totalPercentage, radarData);
}

function renderResults(total, radarData) {
    ui.finalScore.innerText = `${total}%`;
    ui.scoreCircle.style.background = `conic-gradient(var(--accent) ${total}%, rgba(255,255,255,0.05) ${total}%)`;
    
    let level = "";
    let desc = "";
    let color = "";
    
    if (total <= 15) {
        level = "Nível Inexpressivo";
        desc = "A empresa apresenta alto risco de responsabilização legal e multas. A LGPD ainda não foi internalizada, necessitando ações de adequação de urgência imediata.";
        color = "var(--danger)";
    } else if (total <= 40) {
        level = "Nível Iniciando";
        desc = "A organização deu os primeiros passos, porém lacunas processuais críticas ainda operam risco alto. A falta de documentação ou de processos maduros ainda expõe a empresa.";
        color = "var(--warning)";
    } else if (total <= 70) {
        level = "Nível Intermediário";
        desc = "A empresa possui uma estrutura base interessante, porém necessita aprimorar a consistência dos processos para atingir plena conformidade tecnológica e jurídica.";
        color = "var(--accent)";
    } else {
        level = "Nível Aprimorado";
        desc = "Excelente nível de preparo. A organização entende os impactos da LGPD e adota postura proativa e compliance consistente e seguro por design.";
        color = "var(--success)";
    }
    
    ui.maturityLevel.innerText = level;
    ui.maturityLevel.style.color = color;
    ui.maturityDesc.innerText = desc;
    
    drawRadar(radarData);
}

function drawRadar(dataValues) {
    if (radarChartInstance) radarChartInstance.destroy();
    
    const ctx = ui.radarCanvas.getContext('2d');
    
    Chart.defaults.color = 'rgba(255,255,255,0.6)';
    Chart.defaults.font.family = "'Inter', sans-serif";
    
    radarChartInstance = new Chart(ctx, {
        type: 'radar',
        data: {
            labels: [
                'Governança', 
                'Mapeamento', 
                'Bases Legais', 
                'Direitos', 
                'DPO', 
                'Segurança', 
                'Incidentes'
            ],
            datasets: [{
                label: 'Sua Maturidade',
                data: dataValues,
                backgroundColor: 'rgba(0, 130, 139, 0.2)',
                borderColor: '#00828b',
                pointBackgroundColor: '#0a0f1a',
                pointBorderColor: '#00828b',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: '#00828b',
                borderWidth: 2
            }]
        },
        options: {
            scales: {
                r: {
                    angleLines: { color: 'rgba(255, 255, 255, 0.1)' },
                    grid: { color: 'rgba(255, 255, 255, 0.1)' },
                    pointLabels: {
                        font: { size: 11, weight: '600' }
                    },
                    ticks: {
                        display: false,
                        min: 0,
                        max: 100,
                        stepSize: 20
                    }
                }
            },
            plugins: {
                legend: { display: false }
            }
        }
    });
}

// Integração WhatsApp 
const WHATSAPP_NUMBER = "5511999604342";

function formatWhatsAppMessage(leadData) {
    let msg = `Olá Thiago!\n\n`;
    if (leadData) {
        msg += `Realizei a Análise de Maturidade LGPD e gostaria de tirar algumas dúvidas e discutir uma Consultoria.\n\n`;
        msg += `📋 *Dados para contato:*\n`;
        msg += `👤 Nome: ${leadData.name}\n`;
        msg += `🏢 Empresa: ${leadData.company}\n`;
        msg += `💼 Cargo: ${leadData.role}\n`;
        msg += `📧 Email: ${leadData.email}\n`;
        msg += `📞 Tels: ${leadData.phone}\n\n`;
    } else {
        msg += `Realizei a Análise de Maturidade LGPD através da sua ferramenta e gostaria de tirar algumas dúvidas.\n\n`;
    }
    
    msg += `📊 *Resultado da Minha Análise:*\n`;
    msg += `• Pontuação Geral: *${totalPercentage}%*\n`;
    msg += `• Status: *${ui.maturityLevel.innerText}*\n\n`;
    
    msg += `🎯 *Desempenho por Dimensão:*\n`;
    dimensionKeys.forEach(k => {
        msg += `• ${k}: ${finalResults[k]}%\n`;
    });
    
    if (leadData && leadData.message) {
        msg += `\n💬 *Mensagem do lead:*\n${leadData.message}\n`;
    }
    
    msg += `\nAguardo seu contato!`;
    
    return encodeURIComponent(msg);
}

// Botões Envio
ui.formLead.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const leadData = {
        name: document.getElementById('lead-name').value,
        email: document.getElementById('lead-email').value,
        company: document.getElementById('lead-company').value,
        role: document.getElementById('lead-role').value,
        phone: document.getElementById('lead-phone').value,
        message: document.getElementById('lead-message').value
    };
    
    const rawMsg = formatWhatsAppMessage(leadData);
    const url = `https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${rawMsg}`;
    
    // Abre WhatsApp
    window.open(url, '_blank');
});

ui.btnDirectWhatsapp.addEventListener('click', () => {
    const rawMsg = formatWhatsAppMessage(null);
    const url = `https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${rawMsg}`;
    
    // Abre WhatsApp
    window.open(url, '_blank');
});


