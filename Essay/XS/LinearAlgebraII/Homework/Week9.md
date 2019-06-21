*11612733 杜子豪*

* **6.C——**

* 3.

  $span(e_1,...,e_m)=span(u_1,...,u_m)$ thus $e_1,...,e_m$ is a spanning list with right length

  Hence it is a basis of $U$, $\dim U=m$

  Since $e_1,...,e_m,f_1,...,f_n$ is orthonormal basis of $V$, $\dim V=m+n$ and $f_i\perp e_j$

  Hence $span(f_1,...,f_n)\sub U^\perp$

  Since $V=U\oplus U^\perp$, we get $\dim U^\perp=\dim V-\dim U=n$

  Thus $f_1,...,f_n$ is a linearly independent list with right length

  Hence $f_1,...,f_n$ is a orthonormal basis of $U^\perp$

  

* 6.

  If $P_UP_W=0$, $\forall w\in W$, $P_UP_Ww=P_Uw=0$ hence $w\in U^\perp$

  ​	Since $w$ is chosen arbitrary, $W\sub U^\perp$

  ​	which implies that $\forall w\in W,\;u\in U$, $\langle u,w\rangle=0$

  If $\forall w\in W,\;u\in U$, $\langle u,w\rangle=0$

  ​	$W\in U^\perp,\;U\in W^\perp$, $\forall v\in V,\;P_Wv\in W,\;P_UP_Wv=0$	

  ​	which implies that $P_UP_W=0$

  

* 7.

  Since $null\;P\sub V,\;range\;P\sub V,\;\dim null\;P+\dim range\;P=\dim V,\;null\;P\perp range\;P$, 

  $null\;P\oplus range\;P=V$

  Define $U=range\;P$, $\forall v\in V,\exist w\in null\;P,\;u\in range\;P$, s.t. $v=w+u$

  Since $null\;P\perp range\;P$, $P_Uv=u$

  Since $u\in U= range\;P$, $\exist x\in V$, s.t. $Px=u$

  $Pu=P(Px)=Px=u$, hence $Pv=P(w+u)=Pu=u=P_Uv$

  

* 8.

  Suppose $u\in range\;P,\;u\not=0$, $\exist v_w\in V$, s.t. $u=Pv_w$

  $u=Pv_w=P^2v_w=Pu$, hence $u\notin null\;P$, since $u$ is chosen arbitrary

  We get $null\;P\cap range\;P=\{0\}$

  Since $\dim null\;P+\dim range\;P=\dim V,\;null\;P,range\;P\sub V$, $null\;P\oplus range\;P=V$

  $\exist u\in range\;P,w\in null\;P$ s.t. $v=w+u$

  $Pv=P(w+u)=Pu=u=P(u+aw)$ thus $\|u\|=\|P(u+aw)\|\leq\|u+aw\|$ for  all $a\in\mathrm{F}$

  Hence $\|u+aw\|^2-\|u\|^2=|a|^2\|w\|+a\langle w,u\rangle+\overline{a}\langle u,w\rangle\geq0$

  Let $a=-\langle u,w\rangle/\|w\|$, we get $-|\langle u,w\rangle|^2\|w\|\geq0$ thus $\langle u,w\rangle=0$

  Since $u,v$ is chosen arbitrary, $null\;P\perp range\;P$

  By Problem 7, we get $P=P_U$

  

* 10.

  If $U$ and  $U^\perp$ are both invariant under $T$

  ​	$\forall u\in U$, $Tu\in U$, hence $P_U(Tu)=Tu$, $TP_Uu=Tu$

  ​	$\forall w\in U^\perp$, $Tw\in U^\perp$, hence $P_U(Tw)=0,\;TP_Uw=T0=0$

  ​	Since $\forall v\in V, \exist u_0\in U,w_0\in U^\perp$ s.t. $v=u_0+w_0$

  ​	Hence $P_UTv=P_UT(u_0+w_0)=TP_U(u_0+w_0)=TP_Uv$

  If $P_UT=TP_U$

  ​	$\forall u\in U,Tu=TP_Uu=P_UTu=u_0$ where $u_0\in U,w_0\in U^\perp,u_0+w_0=Tu$

  ​	Hence $Tu\in U$

  ​	$\forall w\in U^\perp,P_UTw=TP_Uw=T0=0$ which implies $Tw\in U^\perp$

  ​	Hence $U$ and $U^\perp$ is invariant under $T$

  

* 11.

  Applying Gram-Schmidt Procedure to $(1,1,0,0),(1,1,1,2)$,

  We get $e_1=\frac 1{\sqrt 2}(1,1,0,0),e_2=\frac1{\sqrt5}(0,0,1,2)$

  Thus $e_1,e_2$ is an orthonormal basis of $U$, thus it can be extend to an orthonormal basis of $V$

  as $e_1,e_2,e_3,e_4$, denote $\lambda_i=\langle(1,2,3,4),e_i\rangle$ for $i=1,...,4$

  Thus $\|u-(1,2,3,4)\|=\|xe_1+ye_2-(\lambda_1e_1+\cdots+\lambda_4e_4)\|=|x-\lambda_1|+|y-\lambda_2|+|\lambda_3|+|\lambda_4|$

  Hence $u=\lambda_1e_1+\lambda_2e_2=\frac1{10}(15,15,22,44)$

  

* 12.

  Define $V=\{p\in\mathcal{P}_3(\R):p(0)=0,p'(0)=0\}$ and $\langle f,g\rangle=\int_{0}^{1}f(x)g(x)dx$, $q(x)=2+3x$

  The basis of $V$ is $x^3,x^2$, and by Gram-Schmidt Procedure 

  It ban be transformed into $e_1=\sqrt5x^2,e_2=\sqrt7(6x^3-5x^2)$

  By the proof of Problem 11. $P(x)=\langle q,e_1\rangle e_1+\langle q,e_2\rangle e_2=24x^2-10.3x^3$

  

* **7.A——**

* 1.

  $\langle T(x_1,...,x_n),(y_1,...,y_n)\rangle=\langle(0,x_1,...,x_{n-1}),(y_1,...,y_n)\rangle=x_1y_2+\cdots+x_{n-1}y_n$

  $=\langle(x_1,...,x_n),(y_2,...,y_n,0)\rangle=\langle(x_1,...,x_n),T^*(y_1,...,y_n)\rangle$

  Hence $T^*(z_1,...,z_n)=(z_2,...,z_n,0)$

  

* 2.

  $\lambda$ is an eigenvalue of $T\Leftrightarrow\langle(T-\lambda I)v,w\rangle=0\Leftrightarrow\langle v,(T-\lambda I)^*w\rangle=0$

  $\Leftrightarrow\langle v,(T^*-\overline\lambda I)w\rangle=0$

  Suppose $\overline\lambda$ is not an eigenvalue of $T^*$, $T^*-\overline\lambda I$ is suejective

  Thus $\exist u\in V$ s.t. $(T^*-\overline\lambda I)u=v$

  We get $\langle v,v\rangle=0$, However, $v$ is eigenvector of $T$, $v\not=0$

  Hence $\overline\lambda$ is an eigenvalue of $T^*$

  

* 4.

  * a.

    $T$ is injective iff $null\;T=\{0\}$ iff $(range\;T^*)^\perp=\{0\}$ iff  $range\;T^*=V$ iff $T^*$ is surjective

  * b.

    $T$ is surjective iff $range\;T=W$ iff $(range\;T)^\perp=\{0\}$ iff $null\;T^*=\{0\}$ iff $T^*$ is injective

    

* 6.

  Let $p(x)=a_0+a_1x+a_2x^2,q(x)=b_0+b_1x+b_2x^2$

  * a.

    $\langle Tp,q\rangle=\int_{0}^{1}a_1x(b_0+b_1x+b_2x^2)dx=a_1(\frac12b_0+\frac13b_1+\frac14b_2)$

    $\langle p,Tq\rangle=\int_{0}^{1}b_1x(a_0+a_1x+a_2x^2)dx=b_1(\frac12a_0+\frac13a_1+\frac14a_2)$

    Hence $\langle Tp,q\rangle\not=\langle p,Tq\rangle$ which implies that $T$ is not self-adjoint

  * b.

    Since the basis $1,x,x^2$ is not an orthonormal basis

    

* 11.

  If $P=P_U$ for some $U$ as a subspace of $V$

  ​	$\forall v_1,v_2\in V$, $\exist u_1,u_2\in U,w_1,w_2\in U^\perp$ s.t. $v_1=u_1+w_1,v_2=u_2+w_2$

  ​	$\langle Pv_1,v_2\rangle=\langle u_1,u_2+w_2\rangle=\langle u_1,u_2\rangle=\langle u_1,u_2+w_2\rangle=\langle v_1,Pv_2\rangle$

  ​	Hence $P$ is self-adjoint

  If $P$ is self-adjoint

  ​	$null P\;=(range\;P^*)^\perp=(range\;P)^\perp$

  ​	Hence By Problem 6.C 7, we get $P=P_{range\,P}$

  ​	

* 13.

  With respect to standard basis $(1,0,0,0),(0,1,0,0),(0,0,1,0),(0,0,0,1)$

  Let $\mathcal{M}(T)=|1\;0\;0\;0|$    The $\mathcal{M}(T^*)$ is the conjugate transpose of $\mathcal{M}(T)$ as $|1\;0\;0\;0|$

  ​						$|0\;0\;0\;1|$													 											$|0\;0\;1\;0|$

  ​						$|0\;1\;0\;0|$													 											$|0\;0\;0\;1|$

  ​						$|0\;0\;1\;0|$													 											$|0\;1\;0\;0|$

  Hence $\mathcal{M}(TT^*)=I=\mathcal{M}(T^*T)$ however $T\not=T^*$

  

* 15.

  * a.

    $T$ is self-adjoint iff $\langle T^*v,w\rangle=\langle v,Tw\rangle=\langle v,x\rangle\langle u,w\rangle=\langle\langle v,x\rangle u,w\rangle$

    iff $T^*v=\langle v,x\rangle u$

    If $u=kx$ for some $k\in\R$, $Tv=\langle v,kx\rangle x=\langle v,x\rangle kx=T^*v$

    If $T^*v=\langle v,x\rangle u$, $T^*v-Tv=0=\langle v,x\rangle u-\langle v,u\rangle x$

    ​	Let $v=u$ and $u\not=0$, $\langle u,x\rangle u-\langle u,u\rangle x=0$

    ​	Since $\langle u,u\rangle\not=0$, $u,x$ are linearly dependent

    Hence $T$ is self-adjoint iff $u,x$ are linearly dependent

  * b.

    

* 18.

  Let $V=\R^2$, and with respect to standard orthonormal basis $e_1=(1,0),e_2=(0,1)$

  Define $Te_1=e_1+e_2,Te_2=e_1-e_2$

  Thue $T^*e_1=e_1-e_2,T^*e_2=e_2-e_1$

  $\|Te_1\|=\|T^*e_1\|,\|Te_2\|=\|T^*e_2\|$ however $\mathcal{M}(T)\not=\mathcal{M}(T^*)$

  

* 19.

  Since $T$ is normal $\forall v\in null\;T$, $\|T^*v\|=\|Tv\|=0$ thus $v\in null\;T^*$ which is $null\;T\subseteq null\;T^*$

  Similarly $null\;T^*\subseteq null\;T$ hence $null\;T=null\;T^*$

  $\langle T^*(z_1,z_2,z_3),(1,1,1)\rangle=0=\langle(z_1,z_2,z_3),T(1,1,1)\rangle=\langle(z_1,z_2,z_3),(2,2,2)\rangle$

  Thus $2z_1+2z_2+2z_3=0$ which is $z_1+z_2+z_3=0$