*11612733 杜子豪*

* **5.B——**

* 1.

  * a.

    $(I+T+T^2+\cdots+T^{n-1})(I-T)=(I+T+T^2+\cdots+T^{n-1})-(T+T^2+\cdots+T^{n-1}+T^n)=I$

    Thus $I-T$ is invertible 

  * b.

    $(1-x)^{-1}=\sum_{n=0}^{\infty}x^n$

    Substitute $x$ with $T$ we can get the formula

  

* 4.

  $\forall v\in V, v=Pv+(v-Pv)$

  Since $Pv\in\mathrm{range}\,P$ and $P(v-Pv)=0$ which implies $v-Pv\in\mathrm{null}\,P$

  $V=\mathrm{null}\,P+\mathrm{range}\,P$

  Suppose $v\in\mathrm{range}\,P\cap\mathrm{null}\,P$

  $\exist u\in V$ s.t. $Pu=v$

  $0=Pv=PPu=Pu=v$

  Thus $\mathrm{range}\,P\cap\mathrm{null}\,P=\{0\}$

  

* 6.

  Since $U$ is invariant under $T$, $u\in U$ implies $Tu\in U$

  Thus $u\in U$ implies $TTu\in U$

  Thus similarly $U$ is invariant under $T^n$ for any $n\in\N^*$

  Since $p(T)=\sum_{n=0}^{\infty}a_nT^n$

  Thus $U$ is invariant under $p(T)$

  

* 11.

  If $\alpha=p(\lambda)$ where $\lambda$  is an eigenvalue of $T$,  $p(T)v=p(\lambda) v=av$

  Thus $\alpha$ is an eigenvalue of $T$

   If $\alpha$ is an eigenvalue of $p(T)$, $p(T)-\alpha I$ is not invertible

  Suppose $p-\alpha=c(x-\lambda_1)\cdots(x-\lambda_n)$ where $c,\lambda_1,...,\lambda_n\in\C$

  $p(T)-\alpha I=c(T-\lambda_1 I)\cdots(T-\lambda_nI)$

  Thus $\exist\lambda_k$ s.t. $T-\lambda_kI$ is not invertible

  $p(T)v=av=p(\lambda_k)v$

    

* 12.

  Suppose $T(x,y)=(-x,y)$

  Thus $T$ has no eigenvalue

  However $T^2=I$ which has eigenvalue $1$

  

* 15.

  Can’t find such operator….

  

* 16.

  Define $\phi(p)=p(T)v$ where $\phi\in\mathcal{L}(\mathcal{P}_n(\C),V)$

  $\phi(ap_1+bp_2)=(ap_1+bp_2)(T)v=ap_1(T)v+bp_2(T)v=a\phi(p_1)+b\phi(p_2)$

  Thus $\phi$ is linear.

  Since $\dim\mathcal{P}_n(\C)=n+1$

  $\phi$ is not injective

  Hence $\exist p\in\mathcal{P}_n(\C)$ s.t. $\phi(p)=0=p(T)v$

  Thus we can write $c(T-\lambda_1I)\cdots(T-\lambda_mI)v=0$

  Thus $\exist \lambda_j$ s.t. $Tv=\lambda v$

  

* **5.C——**

* 1.

  Since $T$ is diagonalizable, exist 1-dimensional subspace $U_1,...,U_n$ of V

  For each $U_k$ if $x\in U_k$, $Tx\in U_k$

  Thus if $Tx=0$, $\mathrm{null}\,T|_{U_k}=U_k$ otherwise $\mathrm{range}\,T|_{U_k}=U_k$

  Thus $V=\mathrm{null}\,T\oplus\mathrm{range}\,T$

  

* 3.

  * a to b is obvious

  * b to c

    $\dim V=\dim\mathrm{null}\,T+\dim\mathrm{range}\,T=\dim(\mathrm{null}\,T+\mathrm{range}\,T)=\dim V+\dim(\mathrm{range}\,T\cap\mathrm{null}\,T)​$

    Thus $\dim(\mathrm{range}\,T\cap\mathrm{null}\,T)=0$ which implie $\mathrm{range}\,T\cap\mathrm{null}\,T=\{0\}$

  * c to a

    Since $\mathrm{range}\,T\cap\mathrm{null}\,T=\{0\}$ and $\dim\mathrm{range}\,T+\dim \mathrm{null}\,T=\dim V$

    Hence $\mathrm{range}\,T+\mathrm{null}\,T=V$

    which proves (a)

    

* 6.

  Since $T$ has $\dim V$ distinct eigenvalues, $T$ is diagonalizable

  $S$ has the same eigen vectors as $T$,

  Thus with respect to eigenvectors of $T$, $\mathcal{M}(T)$ has only eigenvalues of $T$ on the diagonal

  Thus with respect to eigenvectors of $T$, $\mathcal{M}(S)$ has also only eigenvalues of $S$ on the diagonal

  Thus with respect to this basis $\mathcal{M}(ST)=\mathcal{M}(TS)$ which implies that $ST=TS$ 

  

* 9.

  $Tv=\lambda v\Leftrightarrow T^{-1}Tv=\lambda T^{-1}v\Leftrightarrow\frac1\lambda v=T^{-1}v$

  Hence $E(\lambda,T)=E(\frac1\lambda,T^{-1})$

  

* 13.

  Suppose $v_1,...,v_4$ is a basis of $\mathrm{F}^4$

  Define $\mathcal{M}(R)$ with respect to this basis is $|2\;0\;0\;0|$

  ​                                                                           $|0\;6\;0\;0|$

  ​                                                                           $|0\;0\;6\;0|$

  ​                                                                           $|0\;0\;0\;7|$

  And define $\mathcal{M}(T)$ with respect to this basis is $|2\;0\;0\;0|$

  ​                                                                                  $|1\;6\;0\;0|$

  ​                                                                                  $|0\;0\;6\;0|$

  ​                                                                                  $|0\;0\;0\;7|$

  If exist $S$ s.t. $R=S^{-1}TS$, $T=SRS^{-1}$

  Since $S$ is invertible and $R$ can be diagonalizable

  With respect to $Sv_1,...,Sv_4$, $T$ can be diagonalizable

  However, $\dim E(2,T)=1,\dim E(6.T)=1,\dim E(7,T)=1$ which implies $T$ is not diagonalizable

  Hence such $S$ doesn’t exist

  

* 15.

  To get existance of $(x,y,z)\in\mathrm{F}^3$ s.t. $T(x,y,z)=(17+8x,\sqrt5+8y,2\pi+8z)$

  We must show that $(T-8I)(x,y,z)=(17,\sqrt5,2\pi)$ and such $(x,y,z)$ exist

  Since $6,7$ are eigenvalues of $T$ and $T$ is not diagonalizable 

  $T$ has no other rigenvalues

  Thus $\mathrm{null}(T-8I)=\{0\}$

  Since $T-8I$ is an operator, it is surjective

  which implies such $(x,y,z)$ must exist 
