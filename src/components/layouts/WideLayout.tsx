interface MainLayoutProps {
	children: React.ReactNode
}

export default function WideLayout({ children }: MainLayoutProps) {
	return (
		<div className="py-3 px-3 w-full grid gap-8 max-w-4xl mx-auto">
			{children}
		</div>
	)
}
