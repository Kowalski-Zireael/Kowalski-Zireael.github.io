*11612733 杜子豪*

* **3.C——**

* 1.

  Suppose the matrix of $T​$ has at most $\dim\mathrm{range}\,T-1​$ nonzero entries

  Thus $Tv_1,\dots,Tv_n$ has at most $\dim\mathrm{range}\,T-1$ nonzero vectors

  Since $\mathrm{range}\,T=\mathrm{span}(Tv_1,\dots,Tv_n)$

  $\dim\mathrm{range}\,T\leq N(The\;number\;of \;nonzero\;vectors)=\dim\mathrm{range}\,T-1$

  which shows contradiction.

  Hence the matrix of $T$ has at least $\dim\mathrm{range}\,T$ nonzero entries 

  

* 3.

  Suppose $v_1,\dots,v_m$ is a basis of $\mathrm{null}\,T$, we can extend it to a basis of V as $v_1,\dots,v_m,u_1,\dots,u_n$

  Thus $\mathrm{range}\,T=\mathrm{span}(Tu_1,\dots,Tu_n)$

  Since $\forall v\in V,\;v\notin\mathrm{null}\,T$, $v=a_1u_1+\cdots+a_nu_n$, $Tv=a_1Tu_1+\cdots+a_nTu_n\not=0$ for $a_1,\dots,a_n$ not all 0

  Thus the only way is to let $a_1=\cdots=a_n=0$ to make $a_1Tu_1+\cdots+a_nTu_n=0$

  Hence $Tu_1,\dots,Tu_n​$ is a basis of $\mathrm{range}\,T​$, we can extend it to a basis of $W​$ as $Tu_1,\dots,Tu_n,w_1,\dots,w_k​$

  Thus we can choose $v_1,\dots,v_m,u_1,\dots,u_n$ as a basi of $V$ and $Tu_1,\dots,Tu_n,w_1,\dots,w_k$ as basis of $W$

  This way, the matrix of $T$ satisfies the rule in the problem

  

* 4.

  If $Tv_1\not=0$, since $Tv_1\in W$, we can extend it to a basis of $W$ as $Tv_1,w_2,\dots,w_m$ 

  If $Tv_1=0$, choose any vector in $W$ as $w_1$ and extend it to a basis of $W$

  By both ways of constructions, we can make the matrix of $T$ satisfy the rule in the problem 

  

* 5.

  If $w_1\in\mathrm{range}\,T,\;\exist v_1\in V$, s.t. $Tv_1=w_1$

  If not choose arbitrary $v_1\in V$

  Then extend $v_1$ to a basis of $V$ as $v_1,\dots,v_n$

  By this way of construction, we can make the matrix of $T$ satisfy the rule in the problem

  

* 6.

  If exist such $T$, suppose the respect basis of $V$ is $v_1,\dots,v_n$, the basis of $W$ is $w_1,\dots,w_m$

  $Tv_i=w_1+\cdots+w_m$ for $i=1,\dots,n$; and $Tv_1=\cdots=Tv_n$ 

  Since $\mathrm{range}\,T=\mathrm{span}(Tv_1,\dots,Tv_n)$, $\dim\mathrm{range}\,T=1$

  On the contrary, choose $w_1,\dots,w_m$ as a basis of $W$, s.t. $w_1+\cdots+w_m\in\mathrm{range}\,T$

  Thus $\exist v_1\in V$ s.t. $Tv_1=w_1+\cdots+w_m$, extend $v_1$ to a basis of $V$ as $v_1,\dots,v_n$

  Since $\mathrm{range}\,T=\mathrm{span}(Tv_1,\dots,Tv_n)$ and $\dim\mathrm{range}\,T=1$

  $Tv_1=\cdots=Tv_n=w_1+\cdots+w_m$ which makes the matrix of $T$ whith respect to such basis has 1 as all entries 

  

* 14.

  Suppose $A$ is $a\times b$, $B$ is $c\times d$, $C$ is $e\times f$

  Since $(AB)C$ makes sense, then $b=c,\;d=e$, which also ensure A(BC) making sense

  $[(AB)C]_{i,j}=(AB)_{i,\cdot}\times C_{\cdot,j}=(A_{i,\cdot}\times B)\times C_{\cdot,j}=\sum_{1\leq s\leq n,1\leq t\leq m} a_{i,s}b_{s,t}c_{t,j}$

  $[A(BC)]_{i,j}=A_{i,\cdot}\times(BC)_{\cdot.j}=A_{i,\cdot}\times(B\times C_{\cdot,j})=\sum_{1\leq s\leq n,1\leq t\leq m} a_{i,s}b_{s,t}c_{t,j}$ 

  as desire

  

* **3.D——**

* 1.

  Suppose $u\in U$, since $S,T$ are invertible, $STu=0$ iff $Tu=0$ iff $u=0$

  Thus $\mathrm{null}\,ST={0}$, $ST$ is injective

  Since $S,T$ are invertible $U,V,W$ are isomorphic, which implies $\dim W=\dim U=0+\mathrm{range}\,ST$

  It follows that $ST$ is surjective

  Hence $ST$ is invertible and $(ST)(ST)^{-1}=I,STT^{-1}S^{-1}=SIS^{-1}=I$

  Since the invert is unique, $(ST)^{-1}=T^{-1}S^{-1}$

  as desire

  

* 3.

  If such $T$ exist, $Su=0$ iff $Tu=0$ iff $u=0$, which implies that $S$ is injective

  If $S$ is injective:

  ​	Suppose $u_1,\dots,u_n$ is a basis of $U$, we can extend it to a basis of $V$ as $u_1,...,u_n,w_1,...w_m$

  ​	$\mathrm{range}\,S=\mathrm{span}(Su_1,\dots,Su_n)$

  ​	S is injective, thus $\dim\mathrm{range}\,S=\dim U=n$

  ​	Thus $Su_1,\dots,Su_n$ is a span list of right length, which implies it is a basis of $\mathrm{range}\,S$

  ​	Since $\mathrm{range}\,S$ is a subspace of $V$

  ​	We can extend the basis above to a basis of $V$ as $Su_1,\dots,Su_n,v_1,...,v_m$

  ​	Let $Tu_i=Su_i,\;Tw_j=v_j$

  ​	This way $T$ is injective and $Tu=Su$ for all $u\in U$

  

* 5.

  If $\mathrm{range}\,T_1=\mathrm{range}\,T_2​$, $\dim\mathrm{null}\,T_1=\dim\mathrm{null}\,T_2​$

  Suppose $v_1,...,v_n$ is a basis of $\mathrm{null}\,T_1$, we can extend it to a basis of $V$ as $v_1,...,v_n,u_1,...u_m$

  Thus $\mathrm{range}\,T_1=\mathrm{span}(T_1u_1,...,T_1u_m)$ 

  This list have the right length, which implies that it is linearly independent

  Then we can find $l_1,...l_m$ s.t. $T_1u_i=T_2l_i$

  We can extend it to a basis of $V$  as $w_1,...,w_n,l_1,...l_m$

  Thus $w_1,...w_n$ is a basis of $\mathrm{null}\,T_2$

  Now let $Sv_i=w_i,Su_j=l_j$, $T_1=T_2S$ and $S$ is an operator with injectivity 

  Hence such $S$ is invertible

  On the contrary, if such $S$ exists

  Since $T_1v=T_2Sv$ for $\forall v\in V$, $\mathrm{range}\,T_1\sub\mathrm{range}\,T_2$

  Suppose the invert of $S$ is $S^{-1}$

  Since $S^{-1}T_1v=T_2v$ for $\forall v\in V$, $\mathrm{range}\,T_1\supset\mathrm{range}\,T_2$

  Hence $\mathrm{range}\,T_1=\mathrm{range}\,T_2$

  

* 7.

  * a.

    Suppose $T_1,T_2\in E$ 

    Since $T_1,T_2\in\mathcal{L}(V,W)$, $(T_1+T_2)v=T_1v+T_2v=0$

    $aT_1v=0$

    Hence it is a subspace of $\mathcal{L}(V,W)$

  * b.

    Extend such $v$ to a basis of $V$ as $v,v_2,...,v_n$

    Now for $Tv_2,..,Tv_n​$ extend it to a basis of $V​$ as $Tv_2,..,Tv_n,w_1,...w_k​$

    Since $Tv=A_{1,1}Tv_2+\cdots+Am,1w_k=0$

    $\mathcal{M}(T)$ have all 0’s on the first colum

    Thus $\dim E=\dim W(\dim V-1)$

    

* 8.

  Suppose $v_1,...v_m$ is a basis of $\mathrm{null}\,T$ we can extend it to a basis of $V$ as $v_1,...,v_m,u_1,...u_n$

  Let $U=\mathrm{span}(u_1,...,u_m)$

  Since $T$ is surjective, $\dim U=n=\dim\mathrm{range}\,T=\dim W$

  Thus $U$ and $W$ are isomorphic

  What’s more, $T|_U(u_i)=Tu_i$ and $\mathrm{range}\,T=\mathrm{range}\,T|_U$

  Thus $T|_U$ is surjective and since $\dim U=\dim W$ it is also invertible as desire

  

* 9.

  If $S,T$ are both invertible 

  ​	$SS^{-1}=I,\;TT^{-1}=I$ and $STT^{-1}S^{-1}=I$

  If $ST$ is invertible, exist $P$ s.t. $P(ST)=(ST)P=I$

  ​	If $v\in\mathrm{null}\,T$, $v=Iv=P(ST)v=PS(Tv)=0$

  ​	Thus $T$ is injective. Similarly, $S$ is injective

  ​	Since $S,T$ are operator, they are invertible 

  

* 11.

  From problem 9, $U$ is invertible, thus $STU=UST=I$

  Thus again $T$ is invertible, thus $TT^{-1}=I=UST$ which implies $T^{-1}=US$

  

* 15.

  $F^{n,1}$ has length n basis and $F^{m,1}$ has length m basis

  Thus with this basis $\mathcal{M}(T)$ is a $m\times n$ matrix

  $\mathcal{M}(Tx)=\mathcal{M}(T)\mathcal{M}(x)$

  Since $x$ is a matrix already, if we choose the standard basis as $1$ in given position and al the others are $0's$

  $\mathcal{M}(x)=x$ 

  Hence exist such matrix and $A=\mathcal{M}(T)$ with respect to the basis choosen above

  

* 18.

  If $V$ is finite, $\dim V=\dim F\times\dim V$ which is obvious

  If $V$ is infinite

  ​	Suppose $f_{a,v}(a)=v$ for some $v\in V,\;a\in\mathrm{F}$

  ​	Let $\varphi(v)=f_{1,v}$

  ​	Since $f$ is linear 

  ​	$\forall f_{a,v}(ab)=af_{a,v}(b)=bv=bf_{1,v}(1)=f_{1,v}(b)$

  ​	which implies $\varphi$ is surjective

  ​	$\varphi(v)=0$ iff $f_{1,v}(\lambda)=\lambda v=0$ for all $\lambda$ iff $v=0$

  ​	Hence $\varphi$ is invertible

  Thus we construct a linear map which is invertible between $V$ and $\mathcal{L}(\mathrm{F},V)$

  as desire

  

* 20.

  Let matrix $(A)_{i,j}=A_{i,j}$ and $X=(x_1,...,x_n)^T$ and $c\in\mathrm{F}^n$

  Hence this question is equivalent to 

  ​	$X=0$ is the only solution of $AX=0$ (a.) iff $AX=c$ has a solution for all $c$ (b.)

  Let $\mathcal{M}(T)=A$ with respect to standard basis

  (a.) is equivalent to $T's$ injectivity

  (b.) is equivalent to $T's$ surjectivity

  Since $T$ is an operator, they are both equivalent 

  

* **3.E——**

* 1.

  Suppose $(v_1,Tv_1),(v_2,Tv_2)\in V\times W$

  If $T$ is linear

  ​	$(v_1,Tv_1)+(v_2,Tv_2)=(v_1+v_2,T(v_1+v_2))$ where $T(v_1+v_2)\in W$

  ​	Hence graph of $T$ is closed under addition

  ​	$a(v_1,Tv_1)=(av_1,T(av_1))$ where $T(av_1)\in W​$

  ​	Hence graph of $T$ is closed under multiplication

  ​	Since $(0,0)$ is in the graph of $T$, graph of $T$ is a subspace

  If graph of $T$ is a subspace

  ​	$(v_1,Tv_1)+(v_2,Tv_2)=(v_1+v_2,Tv_1+Tv_2)\in V\times W$ and $(v_1+v_2,T(v_1+v_2))\in V\times W$

  ​	Hence $T(v_1+v_2)=Tv_1+Tv_2$

  ​	$a(v_1,Tv_1)=(av_1,aTv_1)\in V\times W$ and $(av_1,T(av_1))\in V\times W$

  ​	Hence $aTv_1=T(av_1)$

  ​	which implies $T$ is linear

   

* 2.

  $\dim(V_1\times\cdots\times V_m)=\sum_{k=1}^{m}\dim V_k<+\infty$

  Thus $\dim V_j\leq\sum_{k=1}^{m}\dim V_k$ which implies $V_j$ is finite for $j=1,...m$

  

* 5.

  Suppose $f_i\in\mathcal{L}(V,W_i)$ where $i=1,...,m$ and define $f(v)=(f_1(v),...,f_m(v))$

  Hence $f\in\mathcal{L}(V,W_1\times\cdots\times W_m)$

  Define $g(f_1,...,f_m)=f$

  ​	Suppose $h_i\in\mathcal{L}(V,W_i)$ for $i=1,...,m$

  ​	$g(f_1,...,f_m)+g(h_1,...,h_m)=(f_1(v),...,f_m(v))+(h_1(v),...,h_m(v))$

  ​	$=(f_1(v)+h_1(v),...,f_m(v)+h_m(v))=g[(f_1,...,f_m)+(h_1,...,h_m)]$

  ​	$ag(f_1,...,f_m)=a(f_1(v),...,f_m(v))=(af_1(v),...,af_m(v))=g[a(f_1,...,f_m)]$

  Thus $g$ is linear map from $\mathcal{L}(V,W_1)\times\cdots\times\mathcal{L}(V,W_m)\to\mathcal{L}(V,W_1\times\cdots\times W_m)$

  $g(f_1,...,f_m)=0$ iff $f_1(v)=\cdots=f_m(v)=0$ for all $v\in V$ which implies $g$ is injective

  Since $\forall F\in\mathcal{L}(V,W_1\times\cdots\times W_m)$ define $F_i=\{x:x\;is\;the\;ith\;slot\;of\;F(v)\}$ 

  Obviously, $g(F_1,...,F_m)=F$

  Hence $g$ is surjective and implies that $g$ is invertible

  Thus we can get that the two given spaces are isomorphic	

  

* 6.

  From problem 5, we can get $\mathcal{L}(\mathrm{F}^n,V)$ and $\mathcal{L}(F,V)^n$ are isomorphic

  Now define $f_{v_i}(a)=av_i$ for given $v_i\in V$ and define $g(v_1,...,v_n)=(f_{v_1},...,f_{v_n})$

  Thus $g(v_1,...,v_n)=0$ iff $f_{v_1}=\cdots=f_{v_n}=0$ for all $v_i\in V$ iff $v_1=\cdots=v_n=0$

  Hence $g$ is injective.

  $\forall f\in\mathcal{L}(\mathrm{F},V)$ if $f(x)=v$, $f(x)=f_v(1)$, which implise it is a linear combination of $f_v$

  Hence $g$ is surjective, and it follows that $g$ is invertible

  Hence $V^n$ and $\mathcal{L}(F,V)^n$ are isomorphic, so does $V^n$ and $\mathcal{L}(\mathrm{F}^n,V)$

  

* 8.

  If $A$ is an affine subset of $V$, exist some $x\in V$ and some subspace $U\sub V$, s.t. $A=x+U$

  ​	Since $v,w\in A$, exist $u_1,u_2\in U$ s.t. $v=x+u_1,w=x+u_2$

  ​	$\lambda v+(1-\lambda)w=\lambda x+(1-\lambda)x+[\lambda u_1+(1-\lambda)u_2]=x+[\lambda u_1+(1-\lambda)u_2]\in A$

  If $\forall \lambda\in\mathrm{F},v,w\in A​$, $\lambda v+(1-\lambda)w\in A​$

  ​	Thus $\forall x\in A$, $\lambda(v-x)+(1-\lambda)(w-x)=\lambda v+(1-\lambda)w-x\in A-x$

  ​	Let $w=x$, $\lambda(v-x)\in A-x$

  ​	Let $\lambda=\frac12$, $\frac{v-x+w-x}2\in A-x$ hence $v-x+w-x\in A-x$

  ​	Thus $A-x$ is a subspace, $A=x+(A-x)$ is an affine subset

  

* 9.

  Since $A_1,A_2$ are affine subsets of $V$

  According to problem 8

  $\forall v_1,w_1\in A_1​$, $\lambda v_1+(1-\lambda)w_1\in A_1​$ for all $\lambda\in\mathrm{F}​$

  $\forall v_2,w_2\in A_2​$, $\lambda v_2+(1-\lambda)w_2\in A_2​$ for all $\lambda\in\mathrm{F}​$

  Hence $\forall v,w\in A_1\cap A_2$, $\lambda v+(1-\lambda)w\in A_1\cap A_2$ for all $\lambda\in\mathrm{F}$

  According to problem 8

  This implies $A_1\cap A_2$ is an affine subset

  

* 11.

  * a.

    Suppose $v=\lambda_1v_1+\cdots+\lambda_mv_m$, $w=\mu_1v_1+\cdots+\mu_mv_m$ 

    where $\lambda_1+\cdots+\lambda_m=\mu_1+\cdots+\mu_m=1$

    Thus $\lambda v+(1-\lambda)w=\sum_{k=1}^{m}(\lambda\lambda_k+(1-\lambda)\mu_k)v_k$

    Since $\sum_{k=1}^{m}(\lambda\lambda_k+(1-\lambda)\mu_k)=\lambda\sum_{k=1}^{m}\lambda_k+(1-\lambda)\sum_{k=1}^{m}\mu_k=1$

    $\lambda v+(1-\lambda)w\in A$

    According to peoblem 8, A is an affine subset

  * b.

    

  * c.

    

* 13.

  $U\cap V/U=\{v+U:v\in U\}=0+U$

  Hence the only way to get $a_1v_1+\cdots+a_mv_m+b_1u_1+\cdots+b_nu_n=0$ is to 

  make $a_1=\cdots=a_m=b_1=\cdots=n_n=0$

  Hence $v_1,...,v_m,u_1,...,u_n$ is linearly independent

  Since $m+n=\dim U+\dim (V-U)=\dim U+\dim V-\dim U=\dim V$

  This list is a linearly independent list with right length 

  Hence it is a basis of $V$

  

