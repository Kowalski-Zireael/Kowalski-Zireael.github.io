*11612733 杜子豪*

* **4——**

* 3.

  Denote $P=\{0\}\cup\{p\in\mathcal{P}(\mathrm{F}):\deg p\;is\;even\}​$

  Let $p_1=x^2+x,p_2=-x^2$, thus $p_1,p_2\in P$

  However $p_1+p_2=x$ which is not in $P$

  Hence $P$ is not closed under addition, which implies it is not a subspace of $\mathcal{P}(\mathrm{F})$

  

* 5.

  Define $T\in\mathcal{L}(\mathcal{P}_m(\mathrm{F}),\mathrm{F}^{m+1}),Tp=(p(z_1),...,p(z_{m+1}))$ for $\forall p\in\mathcal{P}_m(\mathrm{F})$

  Suppose $Tp=0$, $p(z_1)=\cdots=p(z_{m+1})=0$

  Since $z_1,...,z_{m+1}$ are distinct, $p$ have $m+1$ distinct zero, which contradict to the $p\in\mathcal{P}_m(\mathrm{F})$

  Thus $p=0$, which implies $T$ is injective

  Since $\dim \mathcal{P}_m(\mathrm{F})=m+1=\dim \mathrm{F}^{m+1}$

  $T$ is surjective, which implies that for $\forall (w_1,...,w_{m+1})\in\mathrm{F}^{m+1}$, $\exist p\in\mathcal{P}_m(\mathrm{F})$ s.t. $Tp=(p(z_1),...,p(z_{m+1}))=(w_1,...,w_{m+1})$

  which is also $p(z_j)=w_j$ for $j=1,...,m+1$

  

* 6.

  Suppose $z_1,...,z_m$ are distinct zeros of $p$, thus $p(z_j)=0$ for $j=1,...,m​$

  ​	For each $j=1,...,m$, since $p(z_j)=0,p=(z-z_j)q$ where $q\in\mathcal{P}_{m-1}(\mathrm{F})$

  ​	Hence $p'=q+(z-z_j)q'$

  ​	Assume $p'(z_j)=0,q(z_j)=0$

  ​	It follows that $q=(z-z_j)s$ where $s\in\mathcal{P}_{m-2}(\mathrm{F})$

  ​	Hence $p=(z-z_j)^2s$ which implies $p$ have two same zeros $z_j$ 

  ​	That contradicts to the distinction of zeros

  Hence $p(z_j)'\not=0$ for each $j=1,...,m$

  Suppose $z_1,...,z_m$ are zeros of $p$, thus $p(z_j)=0$ and $p'(z_j)\not=0$ for $j=1,...,m$

  ​	Assume they are not distinct, we can find $z_s=z_t,z,t\in\{1,...,m\}$ and $s\not=t$

  ​	Thus $p=(z-z_s)^2q$ where $q\in \mathcal{P}_{m-2}$

  ​	$p'=2(z-z_s)q+(z-z_s)^2q'$ which implies $p'(z_j)=0$

  ​	That contradicts to the condition

  Hence $z_1,...,z_m$ are distinct

  

* 7.

  Suppose $p\in\mathcal{P}_m(\R)$ where $m$ is odd

  Thus it can be factorized into $p=c\prod_{i=1}^{n}(x^2-b_ix+c_i)\prod_{j=1}^{m-2n}(x-\lambda_j)$ 

  Since $m$ is odd, $m-2n\not=0$ since $n\in\N$ 

  Thus $p​$ have at least one factor as $(x-\lambda_j)​$ which implies $p​$ has at least one real zero

  

* 9.

  $\overline{p(\overline{z})}=\sum_{k=0}^{m}\overline{a_k}\cdot\overline{(\overline{z})^k}=\sum_{k=0}^{m}\overline{a_k}z^k$

  Thus $\overline{p(\overline{z})}$ is a polynomial and so does $q(z)=p(z)\overline{p(\overline{z})}$

  Hence $q(z)=\sum_{k=0}^{2m}b_kz^k=p(z)\overline{p(\overline{z})}=\overline{p(\overline{z})\overline{p(z)}}=\overline{q(\overline{z})}=\sum_{k=0}^{2m}\overline{b_k}z^k$

  which implies that $b_k=\overline{b_k}$ for each $k=0,...,2m$ 

  Hence $q(z)$ has all coefficients real

  

* **5.A——**

* 1.

  * a.

    If $U\sub\mathrm{null}\,T$, $\forall u\in U$, $Tu=0\in U$

    Thus $U​$ is invariant under $T​$

  * b.

    If $U\supset\mathrm{range}\,T$, since $U$ is a subspace of V, $\forall u\in U,Tu\in\mathrm{range}\,T\sub U$

    Thus $U$ is invariant under $T$

    

* 3.

  $\forall u\in\mathrm{range}\,S,\exist v\in V$ s.t. $Sv=u$

  Thus $Tu=TSv=STv\in\mathrm{range}\,S$

  Hence $\mathrm{range}\,S$ is invariant under $T$

  

* 6.

  Suppose $U$ is a subspace of $V$, s.t. $U\not=\{0\}$ and $U\not=V$

  Thus $\exist u\in U$ s.t. $u\not=0$ and $\exist v\in V$ s.t. $v\in V$ but $v\notin U$

  Extend $u$ to a basis of $V$ as $u,v_2,...,v_n$

  Define $T(u)=w,T(v_j)=0$ for $j=2,...,n$

  Hence $U$ is not invariant under $T$

  Thus $U$ is invariant under all $T$ iff $U=\{0\}$ or $U=V$

  

* 7.

  $T(x,y)=\lambda(x,y)=(\lambda x,\lambda y)=(-3y,x)$

  Thus $\lambda x=-3y,\lambda y=x$, we get $\lambda^2y=-3y$

  Since $T\in\mathcal{L}(\R^2)$, $\lambda^2\not=-3$, we get $y=0$

  Thus $x=y=0$ which contradicts since $(x,y)$ is an eigenvector

  Hence $T​$ has no eigenvalues

  

* 9.

  $T(z_1,z_2,z_3)=\lambda(z_1,z_2,z_3)=(2z_2,0,5z_3)​$

  Thus $\lambda z_1=2z_2,\lambda z_2=0,\lambda z_3=5z_3​$

  Hence we get $\lambda=5$ and corresponding eigenvectors are $(0,0,z_3)$

  ​		and $\lambda=0$ and corresponding eigenvectors are $(z_1,0,0)$

  

* 12.

  $Tp(x)=\lambda p(x)=xp'(x)$

  Suppose $p=\sum_{k=0}^{4}a_kx^k​$, we get $\sum_{k=0}^{4}\lambda a_kx^k=\sum_{k=0}^{4}ka_kx^k​$

  Thus $\lambda=0,1,2,3,4$ and corresponding eigenverctors are $p=ax^\lambda$

  

* 14.

  $P(u+w)=\lambda(u+w)=u​$

  Since $U+W​$ is a direct sum, 

  $\lambda=1​$ and corresponding vectors are $u\in U​$ or 

  $\lambda=0​$ and corresponding vectors are $w\in W​$

  

* 16.

  Suppose such basis of $V​$ is $v_1,...,v_n​$

  Thus $T(v_j)=A_{1,j}v_1+\cdots+A_{n,j}v_n$

  Suppose $\lambda​$ is an eigenvalue and corresponsing vectors are $v=a_1v_1+\cdots+a_nv_n​$

  Hence $T(v)=\sum_{i=1}^{n}a_i(\sum_{j=1}^{n}A_{j,i}v_j)=\sum_{i=1}^{n}\sum_{j=1}^{n}a_iA_{j,i}v_j=\lambda\sum_{i=1}^{n}a_iv_i$

  

* 19.

  Suppose $\sum_{i=0}^{n}x_i=x$， thus $T(x_1,...,x_n)=(x,...,x)=\lambda(x_1,...,x_n)$

  Thus $\lambda=0$ or $x_1=\cdots=x_n$

  Hence the eigenvalues are $0,n$, 

  and corresponding eigenvectors are $(x_1,...,x_n):x_1+\cdots+x_n=0,(x,...,x)\in\mathrm{F}^n$

  

* 21.

  $T^{-1}x=\frac 1\lambda x\Leftrightarrow \lambda TT^{-1}x=Tx\Leftrightarrow Tx=\lambda x$

  

* 26.

  

* 28.

  Suppose $v_1,...,v_n$ is a basis of $V$

  For each $v_j,j=1,...,n$

  ​	$T(v_j)=A_{1,j}v_1+\cdots+A_{n,j}v_n$

  ​	Since $T$ is invariant in any 2-dimensional subspace

  ​	Suppose $U=(v_j,v_k)$ where $k\not=j$ and $k=1,...,n$

  ​	Thus $T(v_j)\in\mathrm{span}(v_j,v_k)$ which implies that $A_{i,j}=0$ where $i=1,...,n$ and $i\not=j,i\not=k$

  ​	Since $k$ is choosen arbitrary other than $j$

  ​	$T(v_j)=\lambda_jv_j$

  Hence $\lambda_j$ is an eigenvalue of $T$

  Since the basis can be choose arbitrary, any vector in $V$ canbe $T's$ eigrnvector

  By problem 26, $T=aI$

  

* 31.

  If $v_1,..,v_m$ are eigrnvectors of some $T$ corresponding to distinct eigenvalues, 

  they are linearlu independent obviously

  If $v_1,...,v_m$ are linearly indeendent

  Extend it to a basis of $V$ as $v_1,...,v_m,v_{m+1},...,v_n$

  Define $T(v_i)=a_iv_i$ where $i=1,...,n$ and $a_i$ are distict

  Thus $a_i$ are $T's$ distict eigenvalue, which implies such $T$ exist

  

* 34.

  $T/(\mathrm{null}\,T)(x+\mathrm{null}\,T)=Tx+\mathrm{null}\,T$

  Thus it is a injective map 

  iff $T/(\mathrm{null}\,T)(x+\mathrm{null}\,T)=0+\mathrm{null}\,T$ implies $x\in\mathrm{null}\,T$

  iff $Tx\in\mathrm{null}\,T​$ implies $x\in\mathrm{null}\,T​$

  Suppose $\mathrm{null}\,T\cap\mathrm{range}\,T\not=\{0\}​$

  We can find some $v\in\mathrm{null}\,T\cap\mathrm{range}\,T$ s.t. $v\not=0$

  Thus $\exists u\in V​$ s.t. $Tu=v​$

  Hence $Tu=v\in\mathrm{null}\,T$ which implies that $u\in\mathrm{null}\,T$

  That is $v=0$

  which proves that $Tx\in\mathrm{null}\,T$ implies $x\in\mathrm{null}\,T$ iff $\mathrm{null}\,T\cap\mathrm{range}\,T=\{0\}$