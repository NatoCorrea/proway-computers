"use strict";(self.webpackChunkproway_computers=self.webpackChunkproway_computers||[]).push([[642],{2642:(A,i,r)=>{r.r(i),r.d(i,{ContatoModule:()=>l});var c=r(6895),f=r(9541),a=r(433),o=r(1571);function d(t,e){1&t&&(o.TgZ(0,"small",12),o._uU(1," Esse campo precisa de no m\xednimo 4 caracteres. "),o.qZA())}function p(t,e){1&t&&(o.TgZ(0,"small",12),o._uU(1," Esse campo precisa ser preenchido. "),o.qZA())}function u(t,e){if(1&t&&(o.TgZ(0,"div"),o.YNc(1,d,2,0,"small",11),o.YNc(2,p,2,0,"small",11),o.qZA()),2&t){const n=o.oxw();o.xp6(1),o.Q6J("ngIf",n.formContato.controls.nome.hasError("minlength")),o.xp6(1),o.Q6J("ngIf",n.formContato.controls.nome.hasError("required"))}}function C(t,e){1&t&&(o.TgZ(0,"small",12),o._uU(1," Esse campo precisa de no m\xednimo 10 caracteres. "),o.qZA())}function g(t,e){1&t&&(o.TgZ(0,"small",12),o._uU(1," Esse campo precisa ser preenchido. "),o.qZA())}function _(t,e){if(1&t&&(o.TgZ(0,"div"),o.YNc(1,C,2,0,"small",11),o.YNc(2,g,2,0,"small",11),o.qZA()),2&t){const n=o.oxw();o.xp6(1),o.Q6J("ngIf",n.formContato.controls.assunto.hasError("minlength")),o.xp6(1),o.Q6J("ngIf",n.formContato.controls.assunto.hasError("required"))}}function v(t,e){1&t&&(o.TgZ(0,"small",12),o._uU(1," Esse campo precisa de no m\xednimo 11 caracteres. "),o.qZA())}function h(t,e){1&t&&(o.TgZ(0,"small",12),o._uU(1," Esse campo precisa ser preenchido. "),o.qZA())}function Z(t,e){if(1&t&&(o.TgZ(0,"div"),o.YNc(1,v,2,0,"small",11),o.YNc(2,h,2,0,"small",11),o.qZA()),2&t){const n=o.oxw();o.xp6(1),o.Q6J("ngIf",n.formContato.controls.telefone.hasError("minlength")),o.xp6(1),o.Q6J("ngIf",n.formContato.controls.telefone.hasError("required"))}}function T(t,e){1&t&&(o.TgZ(0,"small",12),o._uU(1," Esse campo precisa ser um e-mail v\xe1lido. "),o.qZA())}function x(t,e){1&t&&(o.TgZ(0,"small",12),o._uU(1," Esse campo precisa ser preenchido. "),o.qZA())}function y(t,e){if(1&t&&(o.TgZ(0,"div"),o.YNc(1,T,2,0,"small",11),o.YNc(2,x,2,0,"small",11),o.qZA()),2&t){const n=o.oxw();o.xp6(1),o.Q6J("ngIf",n.formContato.controls.email.hasError("email")),o.xp6(1),o.Q6J("ngIf",n.formContato.controls.email.hasError("required"))}}function I(t,e){1&t&&(o.TgZ(0,"small",12),o._uU(1," Esse campo precisa de no m\xednimo 20 caracteres. "),o.qZA())}function E(t,e){1&t&&(o.TgZ(0,"small",12),o._uU(1," Esse campo precisa ser preenchido. "),o.qZA())}function b(t,e){if(1&t&&(o.TgZ(0,"div"),o.YNc(1,I,2,0,"small",11),o.YNc(2,E,2,0,"small",11),o.qZA()),2&t){const n=o.oxw();o.xp6(1),o.Q6J("ngIf",n.formContato.controls.mensagem.hasError("minlength")),o.xp6(1),o.Q6J("ngIf",n.formContato.controls.mensagem.hasError("required"))}}class s{constructor(e){this.fb=e,this.formContato=this.fb.group({nome:["",[a.kI.minLength(4),a.kI.required]],assunto:["",[a.kI.minLength(10),a.kI.required]],telefone:["",[a.kI.minLength(11),a.kI.required]],email:["",[a.kI.email,a.kI.required]],mensagem:["",[a.kI.minLength(20),a.kI.required]]})}ngOnInit(){}enviarFormulario(){alert("A mensagem foi enviada!"),this.formContato.reset()}}s.\u0275fac=function(e){return new(e||s)(o.Y36(a.qu))},s.\u0275cmp=o.Xpm({type:s,selectors:[["app-contato"]],decls:21,vars:27,consts:[[1,"contact__title"],[1,"contact__container"],[1,"contact-form",3,"formGroup","ngSubmit"],["type","text","placeholder","Digite o seu nome","formControlName","nome"],[4,"ngIf"],["type","assunto","placeholder","Digite o assunto","formControlName","assunto"],["type","tel","placeholder","(00) 0 0000-0000","formControlName","telefone","mask","(00) 0 0000-0000"],["type","email","placeholder","Digite o seu e-mail","formControlName","email"],["maxlength","300","placeholder","Digite sua mensagem...","rows","4","formControlName","mensagem"],["type","submit",3,"disabled"],["src","https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14230.300361031366!2d-49.0703074!3d-26.9169772!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94df18c3b4a71d65%3A0xa5ec9dd8406a6a7!2sProWay!5e0!3m2!1spt-BR!2sbr!4v1678805554185!5m2!1spt-BR!2sbr","width","600","height","450","allowfullscreen","","loading","lazy","referrerpolicy","no-referrer-when-downgrade",2,"border","0"],["class","error-message",4,"ngIf"],[1,"error-message"]],template:function(e,n){1&e&&(o.TgZ(0,"h2",0),o._uU(1,"Entre em contato"),o.qZA(),o.TgZ(2,"section",1)(3,"form",2),o.NdJ("ngSubmit",function(){return n.enviarFormulario()}),o._UZ(4,"input",3),o.YNc(5,u,3,2,"div",4),o._UZ(6,"input",5),o.YNc(7,_,3,2,"div",4),o._UZ(8,"input",6),o.YNc(9,Z,3,2,"div",4),o._UZ(10,"input",7),o.YNc(11,y,3,2,"div",4),o.TgZ(12,"textarea",8),o._uU(13,"        "),o.qZA(),o.YNc(14,b,3,2,"div",4),o.TgZ(15,"button",9),o._uU(16,"Enviar"),o.qZA()(),o.TgZ(17,"address"),o._UZ(18,"iframe",10),o.TgZ(19,"p"),o._uU(20,"R. 7 de Setembro, 1600 - 14\xba andar - Centro, Blumenau - SC, 89010-204"),o.qZA()()()),2&e&&(o.xp6(3),o.Q6J("formGroup",n.formContato),o.xp6(1),o.ekj("valid",n.formContato.controls.nome.valid)("invalid",n.formContato.controls.nome.invalid&&(n.formContato.controls.nome.touched||n.formContato.controls.nome.dirty)),o.xp6(1),o.Q6J("ngIf",n.formContato.controls.nome.invalid&&(n.formContato.controls.nome.touched||n.formContato.controls.nome.dirty)),o.xp6(1),o.ekj("valid",n.formContato.controls.assunto.valid)("invalid",n.formContato.controls.assunto.invalid&&(n.formContato.controls.assunto.touched||n.formContato.controls.assunto.dirty)),o.xp6(1),o.Q6J("ngIf",n.formContato.controls.assunto.invalid&&(n.formContato.controls.assunto.touched||n.formContato.controls.assunto.dirty)),o.xp6(1),o.ekj("valid",n.formContato.controls.telefone.valid)("invalid",n.formContato.controls.telefone.invalid&&(n.formContato.controls.telefone.touched||n.formContato.controls.telefone.dirty)),o.xp6(1),o.Q6J("ngIf",n.formContato.controls.telefone.invalid&&(n.formContato.controls.telefone.touched||n.formContato.controls.telefone.dirty)),o.xp6(1),o.ekj("valid",n.formContato.controls.email.valid)("invalid",n.formContato.controls.email.invalid&&(n.formContato.controls.email.touched||n.formContato.controls.email.dirty)),o.xp6(1),o.Q6J("ngIf",n.formContato.controls.email.invalid&&(n.formContato.controls.email.touched||n.formContato.controls.email.dirty)),o.xp6(1),o.ekj("valid",n.formContato.controls.mensagem.valid)("invalid",n.formContato.controls.mensagem.invalid&&(n.formContato.controls.mensagem.touched||n.formContato.controls.mensagem.dirty)),o.xp6(2),o.Q6J("ngIf",n.formContato.controls.mensagem.invalid&&(n.formContato.controls.mensagem.touched||n.formContato.controls.mensagem.dirty)),o.xp6(1),o.Q6J("disabled",n.formContato.invalid))},dependencies:[c.O5,a._Y,a.Fj,a.JJ,a.JL,a.nD,a.sg,a.u],styles:[".contact__title[_ngcontent-%COMP%]{font-size:44px;color:var(--gray);font-weight:700;padding:8px 0}.contact-form[_ngcontent-%COMP%]{display:flex;flex:1;flex-direction:column;row-gap:20px;margin-bottom:50px;min-width:300px}.contact-form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{align-self:flex-end;background-color:var(--blue);border:none;color:#fff;font-size:20px;padding:6px 12px;width:200px}.contact-form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{filter:brightness(1.1)}.contact__container[_ngcontent-%COMP%]{display:flex;flex-flow:row wrap;column-gap:20px;padding:20px 0}.contact-form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:disabled{background-color:var(--gray)}.contact-form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:disabled:hover{filter:none}"]});const q=[{path:"",component:s}];class m{}m.\u0275fac=function(e){return new(e||m)},m.\u0275mod=o.oAB({type:m}),m.\u0275inj=o.cJS({imports:[f.Bz.forChild(q),f.Bz]});class l{}l.\u0275fac=function(e){return new(e||l)},l.\u0275mod=o.oAB({type:l}),l.\u0275inj=o.cJS({imports:[c.ez,m,a.UX]})}}]);