*11612733 杜子豪*

* **3.A——**

* 2.

  Suppose $p_1,p_2\in\mathcal{P}(\R)$

  Additivity:

  ​	Let $p=p_1+p_2​$

  ​	$T(p_1+p_2)=(3p(4)+5p'(6)+bp(1)p(2),\int_{-1}^{2}x^3p(x)dx+c\sin p(0))$

  ​	$p(4)=(p_1+p_2)(4)=p_1(4)+p_2(4)$

  ​	$p'(6)=(p_1+p_2)'(6)=p_1'(6)+p_2'(6)$

  ​	$bp(1)p(2)=b(p_1+p_2)(1)(p_1+p_2)(2)=b[p_1(1)p_1(2)+p_1(1)p_2(2)+p_2(1)p_1(2)p_2(1)p_2(2)]​$

  ​	To make $b[p_1(1)p_1(2)+p_1(1)p_2(2)+p_2(1)p_1(2)p_2(1)p_2(2)]=b[p_1(1)p_1(2)+p_2(1)p(2)(2)]$

  ​	Only to make $b=0$

  ​	$\int_{-1}^{2}x^3(p_1+p_2)(x)dx=\int_{-1}^{2}x^3p_1(x)dx+\int_{-1}^{2}x^3p_2(x)dx$

  ​	$c\sin(p_1+p_2)(0)=c[\sin p_1(0)\cos p_2(0)+\cos p_1(0)\sin p_2(0)]​$

  ​	To make $c[\sin p_1(0)\cos p_2(0)+\cos p_1(0)\sin p_2(0)]=c[\sin p_1(0)+\sin p_2(0)]$

  ​	Only to make $c=0$

  Homogeneity:

  ​	$b(kp)(1)(kp)(2)=bk^2p(1)p(2)$

  ​	To make $bk^2p(1)p(2)=bkp(1)p(2)$ for $\forall k\in\R$, only to make $b=0$

  ​	$c\sin(kp)(0)\equiv kc\sin p(0)$ iff $c=0$

  Which implies that $T$ is linear iff $b=c=0$

  

* 3.

  Let $v_k=(A_{1,k},\dots,A_{m,k})\;(k=1,2,\dots,n)$

  Thus $T(1,0,\dots,0)=v_1$

  ​	$T(0,1,\dots,0)=v_2$

  ​	…

  ​	$T(0,0,\dots,1)=v_n$

  Since $(1,0,\dots,0),\dots,(0,0,\dots,1)$ is a basis of $\mathrm{F}^n$, $v_1,\dots,v_m$ is a basis of $\mathrm{F}^m$

  Which implies that such distinct $T$ exist

   

* 4.

  Suppose exists $a_1,\dots,a_m\in\mathrm{F}$ and not all 0 s.t. $a_1v_1+\cdots+a_nv_n=0$

  $T(a_1v_1+\cdots+a_nv_n)=T(0)=0=a_1Tv_1+\cdots+a_nTv_n$

  Thus $Tv_1,\dots,Tv_n$ is linearly dependent, which contradicts to the independence

  Hence $v_1,\dots,v_n$ is linearly independent

    

* 7.

  Since $T\in\mathcal{L}(V,V)$ and $\dim V=1$, $\exist v,u\in V$ s.t. $u$ and $v$ are two basis of $V$ and $Tv=u$

  Since $\dim V=1$, $u=av$, thus $Tv=av$

  $\forall w\in V, w=bv$

  $Tw=T(bv)=bTv=bav=a(bv)=aw$

   

* 8.

  Let $\varphi(x,y)=x^2/y$ if $y\not=0$ and $\varphi(x,y)=0$ if $y=0$

  Thus $\varphi[a(x,y)]=(ax)^2/(ay)=ax^2/y=a\varphi(x,y)$

  However, $\varphi[(1,2)+(2,1)]=\varphi(3,3)=3\not=1/2+4$

  

* 10.

  Suppose $u\in U$,s.t. $Su\not=0$ 

  Since $U\sub V$ and $U\not=V$

  We can find $v\in V$ s.t. $v\notin U$

  Thus $v+u\notin U$, $T(v+u)=0$

  However, $Tv+Tu=Sv+0=Sv\not=0$ 

  

* 11.

  Suppose $u_1,\dots,u_m$ is a basis of $U$

  Since $U$ is a subspace of $V$, we can extend the basis to $u_1,\dots,u_m,v_{m+1},\dots,v_n$

  Now, define $Tu_i=Su_i$ for $i=1,2,\dots,m$ and $Tv_j=0$ for $j=m+1,\dots,n$

  Hence $T$ is a linear map from $U$ to $V$

  And $\forall u\in U$, we can write $u$ as $u=a_1u_1+\cdots+a_mu_m$ where $a_i\in\mathrm{F},i=1,\dots,m$

  $Tu=T(a_1u_1+\cdots+a_mu_m)=a_1Tu_1+\cdots+a_mTu_m=Su$

  

* 14

  Suppose $v_1,\dots,v_n$ is a basis of $V$

  Then we can define $Sv_i=v_{i+1}$ for $i=1,\dots,n-1$ and $Sv_n=v_1$

  And $Tv_j=v_j$ for $j=2,\dots,n$ and $Tv_1=0$

  $STv_1=0$, however, $TSv_1=v_2\not=0$

  

* **3.B——**

* 3.

  * a.

    If $\mathrm{span}(v_1,\dots,v_m)=V$, $\mathrm{range}\,T=\mathrm{span}(v_1,\dots,v_m)=V$

    Hence $T$ is surjective

  * b.

    If $v_1,\dots,v_m$ is linearly independent, $\forall u\in\mathrm{span}(v_1,\dots,v_m)$

    $\exist unique\,a_1,\dots,a_m\in\mathrm{F}$ s.t. $u=a_1v_1+\cdots+a_mv_m$

    This implies that $T(z_1,\dots,z_m)=T(s_1,\dots,s_m)$ iff $(z_1,\dots,z_m)=(s_1,\dots,s_m)$

    Hence $T$ is injective

    

* 4.

  Denote $\mathcal{M}=\{T\in\mathcal{L}(\R^5,\R^4):\dim\mathrm{null}\,T>2\}$

  Suppose $T_1(v,w,x,y,z)=(0,0,x,y,z),T_2(v,w,x,y,z)=(0,0,-x,y,z)​$

  Hence $\dim\mathrm{null}\,T_1=3=\dim\mathrm{null}\,T_2$ which implies $T_1,T_2\in\mathcal{M}$

  However $(T_1+T_2)(v,w,x,y,z)=(0,0,0,y,z)$, $\dim\mathrm{null}(T_1+T_2)=2$

  

* 5.

  Let $T(w,x,y,z)=(0,0,y,z)$

  

* 7.

  Denote $\mathcal{M}=\{T\in\mathcal{L}(V,W):T\;is\;not\;injective\}$

  Suppose $v_1,\dots,v_m$ is a basis of $V$, $w_1,\dots,w_n$ is a basis of $W$ and $2\leq m\leq n$

  Let $T_1v_1=0$, $T_1v_i=w_i$ for $i=2,\dots,m$ and $T_2v_j=w_j$ for $j=1,\dots,m-1$, $T_2v_n=0$

  $\dim\mathrm{range}\,T_1=\dim\mathrm{range}\,T_2=m-1​$ which implies that $T_1,T_2\in\mathcal{M}​$

  However $(T_1+T_2)(v_i)=2w_i$ for $i=2,\dots,m-1$ and $(T_1+T_2)(v_j)=w_j$ for $j=1,m$

  $\dim\mathrm{range}(T_1+T_2)=m$ which implies $(T_1+T_2)\notin\mathcal{M}$

  

* 9.

  Assume that $Tv_1,\dots,Tv_n​$ is not linearly independent

  Thus $Tv_n$ can be written as $Tv_n=a_1Tv_1+\cdots+a_{n-1}Tv_{n-1}$ where $a_1,\dots,a_{n-1}\in\mathrm{F}$ and not all 0

  $\Rightarrow Tv_n=T(a_1v_1+\cdots+a_{n-1}v_{n-1})$

  Since $v_1,\dots,v_n$ is linearly independent, $v_n\not=a_1v_1+\cdots+a_{n-1}v_{n-1}$

  However $T$ is injective

  Hence $Tv_1,\dots,Tv_n$ can only be linearly independent

  

* 11.

  Since $S_1$ is injective, $S_1(S_2\cdots S_nv)=0$ iff $S_2(S_3\cdots S_nv)=0$ $\cdots$ iff $S_nv=0$ iff $v=0$

  Hence $S_1\cdots S_n$ is injective

  

* 15.

  From the question, we know that $\dim\mathrm{null}\,T=2$

  However $\dim\mathrm{F}^5=5=\dim\mathrm{null}\,T+\dim\mathrm{range}\,T$, $\dim\mathrm{range}\,T=3>\dim\mathrm{F}^2$

  Hence such $T$ does not exist

  

* 17.

  If $T$ is injective, $\dim V=0+\dim\mathrm{range}\,T\leq\dim W$

  If $\dim V\leq\dim W​$, let $v_1,\dots,v_n​$ be basis of $V​$ and $w_1,\dots,w_m​$ be basis of $W​$

  Define $Tv_i=w_i$ for $i=1,\dots,n$

  Then $Tv=0$ iff v=0 which implies $T$ is injective

  

* 20.

  If $T$ is injective, define $S(Tv)=v$, since $Tv$ is unique determined by $v$, $ST$ is well defined on $\mathcal{L}(V,V)$

  If exist such $S$, suppose $u,v\in V$ s.t. $Tu=Tv$

  ​	$v=(ST)v=S(Tv)=S(Tu)=(ST)u=u$, hence $T$ is injective